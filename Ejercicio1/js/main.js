$(document).ready(()=>{
    // Validar campos cuando su valor cambie, eventos keypress/change
    $('input').on('input', (e) => {
        validarCampoVacio(e.target.id);
    });
    // Validar campos si han sido enfocados
    $('input').focusout( (e) => {
        validarCampoVacio(e.target.id);
    });
});

var indicadores;
var pointer;
var historial= [];
console.log("obteniendo historial 1",historial)
historial = JSON.parse(localStorage.getItem('registro')) || [];
console.log("obteniendo historial 2",historial)
console.log(historial)


function calcularCP(config) {
    if(config.flag){
        document.getElementById('txt-pi').value=historial[config.id].poblacionInicial;
        document.getElementById('txt-an').value=historial[config.id].anios;
        document.getElementById('txt-tn').value=historial[config.id].tasaNatalidad;
        document.getElementById('txt-tm').value=historial[config.id].tasaMortalidad;
        document.getElementById('txt-ma').value=historial[config.id].muertesAccidentales;
        document.getElementById('txt-mh').value=historial[config.id].homicidios;
    }
    boolPi = validarCampoVacio('txt-pi');
    boolAn = validarCampoVacio('txt-an');
    boolTn = validarCampoVacio('txt-tn');
    boolTm = validarCampoVacio('txt-tm');
    boolMa = validarCampoVacio('txt-ma');
    boolMh = validarCampoVacio('txt-mh');
    
    console.log(config.flag)
    if (boolPi && boolAn && boolTn && boolTm && boolMa && boolMh || config.flag) {
        if(!config.flag){
            indicadores = {
                nombre:"",
                date : "",
                poblacionInicial: parseFloat(document.getElementById('txt-pi').value),
                anios: parseFloat(document.getElementById('txt-an').value),
                tasaNatalidad: parseFloat(document.getElementById('txt-tn').value),
                tasaMortalidad: parseFloat(document.getElementById('txt-tm').value),
                muertesAccidentales: parseFloat(document.getElementById('txt-ma').value),
                homicidios: parseFloat(document.getElementById('txt-mh').value)
            };
    
        }else{
            indicadores = {
                nombre:historial[config.id].nombre,
                date : historial[config.id].date,
                poblacionInicial:  parseFloat(historial[config.id].poblacionInicial),
                anios:  parseFloat(historial[config.id].anios),
                tasaNatalidad:  parseFloat(historial[config.id].tasaNatalidad),
                tasaMortalidad: parseFloat(historial[config.id].tasaMortalidad),
                muertesAccidentales:  parseFloat(historial[config.id].muertesAccidentales),
                homicidios: parseFloat(historial[config.id].homicidios)
            };
            
        }
       
        
        // Obtener valores iniciales y crear arreglo de datos
        let cp = indicadores.poblacionInicial;
        let chartDatos = [];
        // Insertar caso base en el arreglo
        chartDatos.push({
          date: (new Date().getFullYear()).toString(),
          crecimientoPoblacional: cp
        });
        // Calcular a??os subsiguientes y guardarlos en el arreglo

for (let i = 1; i <= indicadores.anios; i++) {
            nat = (indicadores.tasaNatalidad/100)
            mort = (indicadores.tasaMortalidad/100)
          cp = parseFloat(( cp * (1+(nat)-(mort)) ).toFixed(0));
          chartDatos.push({
            date: (new Date().getFullYear() + i).toString(),
            crecimientoPoblacional: cp
          });
        }



      
        // Actualizar chartdiv
        console.log(chartDatos);
        chart.data = chartDatos;
        // Mostrar o volver visibles las series (lineas del grafico)
        chart.series.values[0].show();
        // Actualizar porcentaje de crecimiento poblacional (final / inicial)
        

        let cp2 = indicadores.poblacionInicial;
        let ma = (indicadores.muertesAccidentales/100);
        let mh = indicadores.homicidios/100;
        let chartDatos2 = [];
        // Insertar caso base en el arreglo
        chartDatos2.push({
          date: (new Date().getFullYear()).toString(),
          muerteAccidente: ma*cp2,
          muertesHomicidios: mh*cp2
        });
        // Calcular a??os subsiguientes y guardarlos en el arreglo
        for (let i = 1; i <= indicadores.anios; i++) {
           nat = (indicadores.tasaNatalidad/100);
            mort = (indicadores.tasaMortalidad/100);
          cp2 = parseFloat(( cp2 * (1+(nat)-(mort)) ).toFixed(0));
	    b=cp2*ma;
           c=cp2*mh;
          chartDatos2.push({
            date: (new Date().getFullYear() + i).toString(),
            muerteAccidente: parseInt(b),
            muertesHomicidios: parseInt(c)
          });
        }
        // Actualizar chartdiv
        console.log('chart2');
        console.log(chartDatos2);
        chart2.data = chartDatos2;
        // Mostrar o volver visibles las series (lineas del grafico)
        chart2.series.values[0].show();
        chart2.series.values[1].show();
        // Actualizar porcentaje de crecimiento poblacional (final / inicial)
        
    }
    else {
        console.log('Formulario inv??lido');
    }


}


/**
 * Reiniciar indicadores para el c??lculo de crecimiento poblacional.
 */
function restablecer(){
    // Limpiar campos de enetrada
    $('input').trigger('reset');
    // Establecer valores vacios a los campos
    $('input').val('');
    
    $('#txt-ma').val(0);
    $('#txt-mh').val(0);
    // Remover las clases de validacion
    $('input').removeClass("is-valid");
    $('input').removeClass("is-invalid");
    // Ocultar las series (lineas del grafico) de CP a traves del tiempo}
    chart.series.values[0].hide();
    chart2.series.values[0].hide();
    chart2.series.values[1].hide();
    // Nuevo conjunto de valores al grafico de porcentaje de CP
    // Establecer en cero los porcentajes de crecimiento natural y absoluto
    
}

/**
 * Validar si un campo requerido en un formulario est?? vac??o.
 * @param {string} id Identificador de un campo
 * @return {boolean} true || false
 */
function validarCampoVacio(id){
    if(document.getElementById(id).value == ''){
        document.getElementById(id).classList.remove('is-valid');
        document.getElementById(id).classList.add('is-invalid');
        return false;
    } else {
        //document.getElementById(id).classList.remove('is-invalid');
        //document.getElementById(id).classList.add('is-valid');
        return true;
    }
}

function ventanaModal(id, data) {
    data=data || {};                            // si no existe data, creamos un objeto vac??o para evitar posteriores errores
    id="modal-"+id;        
    if(document.getElementById(id)){

    }                   // a??adimos "modal-" a la id para evitar conflictos con otros elementos
    if (document.getElementById(id)==null) {    // crear elemento si no existe
      var d=document.createElement("div");
      d.className="jmgmodal";                   // clase para estilos con CSS
      d.id=id;
      // creamos el panel interior
      var p=document.createElement("div");
      p.className="panel";
      // creamos los componentes de la cabecera: t??tulo y bot??n de cerrar
      var t=document.createElement("div");
      t.className="title";
      var cl=document.createElement("div");
      cl.className="close";
      cl.innerHTML='&times;';
      // cerramos y vaciamos la modal al pulsar el bot??n X
      cl.addEventListener('click',function(ev) {
        ev.preventDefault();
        var dTop=this.parentNode.parentNode;
        dTop.classList.remove("visible");
        dTop.querySelector(".panel .content").innerHTML='';
      });
      // creamos la caja donde se mostrar?? el contenido
      var ct=document.createElement("div");
      ct.className="content";
      ct.id="content-"+id;

      
      var f=document.createElement("div");
      /* finalmente, a??adimos "t", "cl" y "ct" (t??tulo, bot??n cerrar y div contenido) a "p" (panel interior), 
      ??ste lo a??adimos a "d" (div principal, para oscurecer el fondo), y "d" lo a??adimos al body de la p??gina */
      p.appendChild(t);p.appendChild(cl);p.appendChild(ct);d.appendChild(p);
      document.body.appendChild(d);
    }
    // guardamos cada componente en una variable
    var mod=document.getElementById(id),
    p=mod.querySelector(".panel"),
    t=mod.querySelector(".panel .title"),
    ct=mod.querySelector(".panel .content");
    // rellenamos los datos
    t.innerHTML=data.title || '';
    ct.innerHTML=data.content || '';
    // comprobamos que el n??mero es v??lido antes de a??adirlo
    if (!isNaN(data.width)) p.style.maxWidth=data.width+'px';
    if (!isNaN(data.height)) p.style.maxHeight=data.height+'vh';
    /* esperamos unos milisegundos para que se genere, y a??adimos la clase .visible para mostrarla desde CSS */
    setTimeout(function(){
      mod.classList.add("visible");
    },50);
    console.log(data.action)
     if(data.action == 2){
        generateContent()
     }else{
         if(data.action == 3){
             generateSaveSim()
         }else{
             if(data.action == 1){
                 generateInfo()
                
             }
         }
     }
     
  }

  var controlActive=false
  function activeItem(){
      if(!controlActive){
          controlActive=true
          for(let i=0; i<historial.length;i++){
              if(i!=poin){
                document.getElementById(`item_${i}`).classList.remove('item-content-active');
              }
          }
          document.getElementById(`item_${poin}`).classList.add('item-content-active');
      }else{
        controlActive=false;
            document.getElementById(`item_${poin}`).classList.remove('item-content-active');
      }
    
  }
  function generateContent(){
    document.getElementById("content-modal-historial").innerHTML="";
    for(let i=0; i<historial.length;i++){
        document.getElementById("content-modal-historial").innerHTML+=` <div class="item-list" onclick="selectItem(${i})" id="">
        <div class="item-content item row" id="item_${i}">
            <div class="col-6 content-element1">
                <span>${historial[i].nombre}</span>
            </div>
            <div class="col-4 content-element2">
                <span>${historial[i].date}</span>
            </div>
            <div class="col-2" >
                <button class="content-button" onclick="editRecord(${i})">
                <i class="fas fa-edit"></i></button>
        </div>
        <div class="content-edit mt-2 d-none" id="edit-${i}">
            <div class="row">
                <div class="col-4 mb-3">
                    <span class="sp-form">Poblaci??n inicial</span>
                   <input type="number" placeholder="" class="form-control" id="inicial-p-${i}">
                </div>
                <div class="col-4  mb-3">
                    <span class="sp-form">A??os a proyectar</span>
                    <input type="number" placeholder="" class="form-control"  id="anios-p-${i}">
                 </div>
                 <div class="col-4  mb-3">
                 <span class="sp-form">Tasa natalidad</span>
                    <input type="number" placeholder="" class="form-control" id="natalidad-p-${i}">
                 </div>
            </div>
            <div class="row">
                <div class="col-4  mb-3">
                     <span class="sp-form">Tasa mortalidad</span>
                    <input type="number" placeholder="" class="form-control" id="mortalidad-p-${i}">
                 </div>
                <div class="col-4  mb-3">
                    <span class="sp-form">Suicidios</span>
                    <input type="number" placeholder="" class="form-control" id="homicidio-p-${i}">
                </div>
                <div class="col-4  mb-3">
                    <span class="sp-form">Muertes violentas</span>
                    <input type="number" placeholder="" class="form-control" id="otrasMuertes-p-${i}">
                </div>
            </div>
            <div class="row">
            <div class="col-12">
                <span class="sp-form">Nombre del escenario</span>
                <input type="text" placeholder="" class="form-control" id="name-sim-${i}">
            </div>
            </div>
            <button class="button__main button__green button-save-2" onclick="updateSimulation(${i})">
             Modificar
            </button>
        </div>
        </div>
        `;
    }

    document.getElementById("content-modal-historial").innerHTML+=`<button class="button__main button__blue--dark  button-save-2" onclick="loadSimulation()">
    Cargar
   </button>`
    
  }

  function  generateSaveSim(){
    document.getElementById("content-modal-guardar").innerHTML="";
    document.getElementById("content-modal-guardar").innerHTML+=`
    <input type="text" class="form-control" style="margin-top:2rem" placeholder="Nombre del escenario" id="name-simulation">
    <button class="button__main button__blue--dark button-save-2" onclick="saveSimulation()">
        Guardar
    </button>
    `;
  }

  function saveSimulation(){
        indicadores.nombre=document.getElementById("name-simulation").value+" "+"| 2020-"+parseFloat(indicadores.anios+2020);
        indicadores.date=generateDate()
        console.log(indicadores)
        historial.push(indicadores)
        indicadores = {}
        localStorage.setItem('registro', JSON.stringify(historial));

        restablecer()
  }

  function generateDate(){
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    h = n.getHours();
    ms = n.getMinutes();
    d = n.getDate();
    return  d + "/" + m + "/" + y + " "+h+ms 
  }


  
  var flag = false;
  function editRecord(id){
    if(!flag){
        flag=true;
        document.getElementById(`edit-${id}`).classList.remove("d-none");
        document.getElementById(`edit-${id}`).classList.add("d-block");
        setDataEdit(id)
    }else{
        flag=false;
        document.getElementById(`edit-${id}`).classList.remove("d-block");
        document.getElementById(`edit-${id}`).classList.add("d-none")
    }
    
  }

  function updateSimulation(id){
    indicadores_edit = {
        nombre: document.getElementById(`name-sim-${id}`).value+" "+"2020-"+2020+parseFloat(document.getElementById(`anios-p-${id}`).value),
        date : generateDate(),
        poblacionInicial: parseFloat(document.getElementById(`inicial-p-${id}`).value),
        anios: parseFloat(document.getElementById(`anios-p-${id}`).value),
        tasaNatalidad: parseFloat(document.getElementById(`natalidad-p-${id}`).value),
        tasaMortalidad: parseFloat(document.getElementById(`mortalidad-p-${id}`).value),
        muertesAccidentales: parseFloat(document.getElementById(`otrasMuertes-p-${id}`).value),
        homicidios: parseFloat(document.getElementById(`homicidio-p-${id}`).value)
    };
    historial[id]=indicadores_edit;
    localStorage.setItem('registro', JSON.stringify(historial));
    indicadores_edit={}
    editRecord(id);

  }


  function  setDataEdit(id){
    document.getElementById(`name-sim-${id}`).value=historial[id].nombre;
    document.getElementById(`inicial-p-${id}`).value=historial[id].poblacionInicial;
    document.getElementById(`natalidad-p-${id}`).value=historial[id].tasaNatalidad;
    document.getElementById(`anios-p-${id}`).value=historial[id].anios;
    document.getElementById(`mortalidad-p-${id}`).value=historial[id].tasaMortalidad;
    document.getElementById(`otrasMuertes-p-${id}`).value=historial[id].muertesAccidentales;
    document.getElementById(`homicidio-p-${id}`).value=historial[id].homicidios;
    
  }

  function selectItem(id){
    poin=id;
    activeItem()
  }

  function loadSimulation(){
      console.log(poin)
      let config={
          flag:true,
          id:poin
      }
    calcularCP(config)
  }

  function  generateInfo(){
    document.getElementById("content-modal-ayuda").innerHTML+=`
    <div class="container">
                <div class="row">
                    <p class="text_info ">
                        En el siguiente modelo, se proyecta la cantidad de habitantes con base al crecimiento  de la poblaci??n, utilizando un algoritmo con recursividad que va a permitir  la proyecci??n en a??os en base al resultado del crecimiento del a??o anterior y siguiendo la misma tasa de natalidad, mortalidad.
                        </p>
                        <p>
                </div>
                <div class="row">
                    <strong>Formula del Modelo</strong>
                    <br>
                    
                    
                    <img class="img_model" src="img/modelo 1.jpeg">  </p> 
                </div>
                
                <div class="row">
                    <p class="text_info mt-5">
                        Con las siguientes formulas, se calculara la tasa de muertes violentas por homicidio y por suicidios por cada 1,000 habitantes de una cuidad X, haciendo referencia al crecimiento de la poblacion antes proyectado. 
                        </p>
                        
                </div>
                <div class="row">
                    <strong>Formulas:</strong>
                </div>
                <div class="container" style: >
                    <div class="row">
                        <div class="row">
                            <p>
                                <img class="img_model2" src="img/formula 2_1.jpeg">  </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="row">
                            <p>
                                <img class="img_model2" src="img/formula 2_2.jpeg">  </p>
                        </div>
                    </div>
                </div>
            </div>`
  }

  