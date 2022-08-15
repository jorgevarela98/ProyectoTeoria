
//Script para poder manipular el movimiento del carro 


/**
 * 
 * Funciones para Animar
 * 
 */



const animacionMainController = (bandera)=>{

    if(bandera == 'reanudar'){
      animacionController('pista','trackstop','track')
      animacionController('llanta','wheelstop','wheel')
      animacionController('llanta2','wheelstop','wheel')
      animacionController('carro','carstop','car')
    }

    if (bandera == 'pausar'){
      animacionController('pista','track','trackstop')
      animacionController('llanta','wheel','wheelstop')
      animacionController('llanta2','wheel','wheelstop')
      animacionController('carro','car','carstop')
    }
}

  const animacionController = (id, claseRemover, claseAgregar)=>{
    document.getElementById(`${id}`).classList.remove(`${claseRemover}`);
    document.getElementById(`${id}`).classList.add(`${claseAgregar}`);
  }

/**
 * 
 * Funciones para la Simulacion
 * 
 */
var dropdownValue=0
var cilindraje = ''
var tipo_combustible = ''
var escenario = '';

/**
 *Esta funcion sirve para obtener datos de manera asyncrona, no del frontend, si se usa en el frontend, seteara los valores a null
 */
const getDataValue = (element)=>{
    dropdownValue  = element.getAttribute('data-modelo');
    cilindraje = element.getAttribute('data-cilindraje')
    tipo_combustible = element.getAttribute('data-combustible')
    document.getElementById('cilindraje-input').value =`${cilindraje}`
    document.getElementById('combustible-input').value =`${tipo_combustible}`
}

/**
 *  Esta funcion si sirve para obtener algunos valores del frontend, de manera sincrona, para dropdowns
 *  utilizar esta para eso, no para asyncs. 
 *
 */


const getFrontValue = (element)=>{
    escenario = element.getAttribute('data-escenario');
}


const comenzarSimulacion = ()=>{
    var marca = '';
    var modelo = '';
    var velocidad = 0;
    var transmision  ='';
    var cantidadCombustible=0;

  console.log(`Cilindraje de vehiculo ${cilindraje}, con el tipo de combustible: ${tipo_combustible} \n en en el escenario : ${escenario}`);


} 


/**
 * 
 * Axios para la Conexion al Backend
 * 
 */



fetch('http://localhost:8088/carros/marcas').then(res=>res.json()).then((data)=>{
  document.getElementById('marcas-dropdown').innerHTML =''
  data.map((marca)=>{
    document.getElementById('marcas-dropdown').innerHTML += `<li><a class="dropdown-item" href="#" onclick="getModelos(${marca.marca_id})">${marca.nombre}</a></li>`
  });
}).catch((error)=>{
    console.log(error)
});

const getModelos = async(modelo_id)=>{
  
  await fetch(`http://localhost:8088/modelos/${modelo_id}`).then(res=>res.json()).then((data)=>{
    document.getElementById('modelo-dropdown').innerHTML =''
    data.map((modelo)=>{
      document.getElementById('modelo-dropdown').innerHTML +=`<li><a class="dropdown-item" onclick='getDataValue(this)'  href="#" data-cilindraje ="${modelo.motor}" data-combustible="${modelo.tipo_combustible}" data-modelo="${modelo.modelo_id}">${modelo.nombre_modelo}</a></li>`
    });
  }).catch((error)=>{
    console.log(error)
});
}
