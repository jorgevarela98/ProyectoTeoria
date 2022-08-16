
//Script para poder manipular el movimiento del carro 


/**
 * 
 * Funciones para Animar
 * 
 */

var pausaAnimacion = false;

const animacionMainController = (bandera)=>{

    if(bandera == 'reanudar'){
      animacionController('pista','trackstop','track')
      animacionController('llanta','wheelstop','wheel')
      animacionController('llanta2','wheelstop','wheel')
        animacionController('carro','carstop','car')
        pausaAnimacion = false;
    }

    if (bandera == 'pausar'){
      animacionController('pista','track','trackstop')
      animacionController('llanta','wheel','wheelstop')
      animacionController('llanta2','wheel','wheelstop')
        animacionController('carro','car','carstop')
        ejecucionAnimacion = true;
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
var marca = '';                                                                                                                                                                                                                     
var modelo = '';
var velocidad = 0;                                                                                                                              
var transmision  ='';                                                                                                                           
var cantidadCombustible=0;
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


const getFrontEscenarioValue = (element)=>{
    escenario = element.getAttribute('data-escenario');
}

const getFrontVelocidadValue = (element)=>{
    velocidad = parseInt(element.getAttribute('data-velocidad'));
}


document.getElementById('btn-pausa').addEventListener('click', ()=>{
    pausaAnimacion = true;
})

const pausador = ()=>{
    return new Promise((resolve)=>{
        let reanudarClick = ()=>{
            document.getElementById('btn-reanudar').removeEventListener('click', reanudarClick);
            pausaAnimacion = false;
            resolve('resolved');
        }

        document.getElementById('btn-reanudar').addEventListener('click', reanudarClick);
    });
} 

const comenzarSimulacion = async()=>{   
    cantidadCombustible = document.getElementById('cantidad-combustible').value;    
    var velocidad_carro = 0;
    /**
     * Los ciclos for dentro del switch-case, iran bajando 
    */
    switch (velocidad) {
        case 1:
            velocidad_carro = numeroAleatorioVelocidad(0,60);
            
            
        
            for (let i=0; i <= cantidadCombustible; i++) {
        
            
               console.log(pausaAnimacion) 

                
                setTimeout(()=>{ 
                        console.log(i);
                    },800);    
                
                //if(pausaAnimacion)await pausador(); 
                
            }
            break;
        case 2:
            velocidad_carro = numeroAleatorioVelocidad(61,120);
            //console.log(velocidad_carro);
            
            for (let i=0; i <= cantidadCombustible; i++) {
            }
            break;

        case 3:
            velocidad_carro = numeroAleatorioVelocidad(121,180);
            console.log(velocidad_carro);
            
            for (let i=0; i <= cantidadCombustible; i++) {
            }
            break;
        default:
            alert('Selección no valida');
            break;
    }


}


const numeroAleatorioVelocidad = (minimo, maximo)=>{
    return Math.floor(Math.random()*(maximo-minimo+1)+minimo);
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
