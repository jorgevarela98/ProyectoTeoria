
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
var id_modelo=0;
var cilindraje = '';
var tipo_combustible = '';
var escenario = '';
var marca = '';                                                                                                                                                                                                                     
var modelo = '';
var velocidad = 0;                                                                                                                              
var transmision  ='';                                                                                                                           
var cantidadCombustible=0;
var consumo_medio = 0;

var velocidad_carro = 0;
var aux_combustible = 0;
var kilometros_recorridos = 0;
var sim_termianda = false;

var rendimiento=0;
var consumo_reflejado = 0;


/**
 *Esta funcion sirve para obtener datos de manera asyncrona, no del frontend, si se usa en el frontend, seteara los valores a null
 */
const getDataValue = (element)=>{
    id_modelo  = element.getAttribute('data-modelo');
    cilindraje = element.getAttribute('data-cilindraje')
    tipo_combustible = element.getAttribute('data-combustible')
    consumo_medio = element.getAttribute('data-consumo');
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
    /*
     *Variables para mostrar en el front:
        
        Velocidad_carro : para la velocidad en Km/H

        * */
    /**
     * Los ciclos for dentro del switch-case, iran bajando 
     */

    /*
     *
     *  Consumo = KM/Litro
     *
     *  Este bloque switch case sirve para realizar los calculos, aux combustible es para mostrar en el front end el combustible consumido durante la Simulacion
     *
     *
    * */
    switch (velocidad) {
        case 1:
            velocidad_carro =numeroAleatorioVelocidad(0,60);
            if (escenario == 'carretera') {
                for (let i = 0; i <= cantidadCombustible; i++) {
                    setTimeout(()=>{
                        /*
                         *Hay menos distancia por los factores de caretera o ciudad y la velocidad entonces provoca mas consumo de combustible y hace menos distancia.
                            * */
                        aux_combustible = i;
                        kilometros_recorridos = (i*consumo_medio).toFixed(2);
                        consumo_medio -=((kilometros_recorridos/cantidadCombustible)*0.05).toFixed(2);
                        rendimiento = (consumo_medio/cantidadCombustible).toFixed(2);
                        consumo_reflejado= ((kilometros_recorridos/cantidadCombustible)*31.75).toFixed(2);
                        console.log(`Combusitble Consumido: ${aux_combustible} Litros \n Kilometros Recorrido: ${kilometros_recorridos} Kilometros\n  Velocidad: ${velocidad_carro}Km/H \n consumo medio: ${consumo_medio}\n Consumo Reflejado: Lps. ${consumo_reflejado}`);
                        if (i==cantidadCombustible){
                                this.simulacionTerminada();                   
                        }
                                
                    },i*2000);
                }     
            }
            if (escenario=='ciudad') {
                for (let i = 0; i <= cantidadCombustible; i++) {
                    setTimeout(()=>{
                        aux_combustible = i;
                        kilometros_recorridos = (i*consumo_medio).toFixed(2);
                        consumo_medio -= ((kilometros_recorridos/cantidadCombustible)*0.15).toFixed(2);
                        rendimiento = (consumo_medio/cantidadCombustible).toFixed(2);
                        consumo_reflejado = ((kilometros_recorridos/cantidadCombustible)*31.75).toFixed(2);
                        console.log(`Combusitble Consumido: ${aux_combustible} Litros \n Kilometros Recorrido: ${kilometros_recorridos} Kilometros\n  Velocidad: ${velocidad_carro}Km/H \n consumo medio: ${consumo_medio}\n Consumo Reflejado: Lps. ${consumo_reflejado}`);
                        if (i==cantidadCombustible){
                                this.simulacionTerminada();                   
                        }
                    },i*2000);
                    
                }
            }
            console.log(rendimiento);
            break;

        case 2:
            velocidad_carro = numeroAleatorioVelocidad(61,120);
            if(escenario == 'carretera'){
                for (let i=0 ; i<=cantidadCombustible; i++) {
                    setTimeout(()=>{
                        aux_combustible = i;
                        kilometros_recorridos = (i*consumo_medio).toFixed(2);
                        consumo_medio-=((kilometros_recorridos/cantidadCombustible)*0.20).toFixed(2);
                        rendimiento = (consumo_medio/cantidadCombustible).toFixed(2);
                        consumo_reflejado = ((kilometros_recorridos/cantidadCombustible)*31.75).toFixed(2);
                        console.log(`Combusitble Consumido: ${aux_combustible} Litros \n Kilometros Recorrido: ${kilometros_recorridos} Kilometros\n  Velocidad: ${velocidad_carro}Km/H \n consumo medio: ${consumo_medio}\n Consumo Reflejado: Lps. ${consumo_reflejado}`);
                        if (i==cantidadCombustible){
                                this.simulacionTerminada();                   
                        }
                    },i*2000);
                }
            }
            if (escenario == 'ciudad'){
                for (let i = 0; i <= cantidadCombustible; i++) {
                    setTimeout(()=>{ 
                        aux_combustible = i;
                        kilometros_recorridos = (i*consumo_medio).toFixed(2);
                        consumo_medio-=((kilometros_recorridos/cantidadCombustible)*0.30).toFixed(2);
                        rendimiento = (consumo_medio/cantidadCombustible).toFixed(2);
                        consumo_reflejado = ((kilometros_recorridos/cantidadCombustible)*31.75).toFixed(2);
                        console.log(`Combusitble Consumido: ${aux_combustible} Litros \n Kilometros Recorrido: ${kilometros_recorridos} Kilometros\n  Velocidad: ${velocidad_carro}Km/H \n consumo medio: ${consumo_medio}\n Consumo Reflejado: Lps. ${consumo_reflejado}`);
                        if (i==cantidadCombustible){
                                this.simulacionTerminada();                   
                        }
                    },  i*2000);
                    
                }
            }
            break;

        case 3:
            velocidad_carro = numeroAleatorioVelocidad(121,180);
            if (escenario == 'carretera') { 
                for (let i=0 ; i<=cantidadCombustible; i++) {
                    setTimeout(()=>{
                        aux_combustible = i;
                        kilometros_recorridos = (i*consumo_medio).toFixed(2);
                        consumo_medio-=((kilometros_recorridos/cantidadCombustible)*0.30).toFixed(2);
                        rendimiento = (consumo_medio/cantidadCombustible).toFixed(2);
                        consumo_reflejado = ((kilometros_recorridos/cantidadCombustible)*31.75).toFixed(2);
                        console.log(`Combusitble Consumido: ${aux_combustible} Litros \n Kilometros Recorrido: ${kilometros_recorridos} Kilometros\n  Velocidad: ${velocidad_carro}Km/H \n consumo medio: ${consumo_medio}\n Consumo Reflejado: Lps. ${consumo_reflejado}`);
                        if (i==cantidadCombustible){
                                this.simulacionTerminada();                   
                        }
                    },i*2000);
                }
            }
            if (escenario == 'ciudad') {
                for (let i=0 ; i<=cantidadCombustible; i++) {
                    setTimeout(()=>{
                        aux_combustible = i ;
                        kilometros_recorridos = (i*consumo_medio).toFixed(2);
                        consumo_medio-=((kilometros_recorridos/cantidadCombustible)*0.40).toFixed(2);
                        rendimiento = (consumo_medio/cantidadCombustible).toFixed(2);
                        consumo_reflejado = ((kilometros_recorridos/cantidadCombustible)*31.75).toFixed(2);
                        console.log(`Combusitble Consumido: ${aux_combustible} Litros \n Kilometros Recorrido: ${kilometros_recorridos} Kilometros\n  Velocidad: ${velocidad_carro}Km/H \n consumo medio: ${consumo_medio}\n Consumo Reflejado: Lps. ${consumo_reflejado}`);
                        if (i==cantidadCombustible){
                            this.simulacionTerminada();                   
                        }
                    },i*2000);
                }
            }
            
            break;
        default:
            alert('Selección no valida');
            break;

    }


}


async function  simulacionTerminada(){
        var data = {
            modelo:id_modelo,
            velocidad: parseFloat(velocidad_carro),
            escenario_sim : escenario,
            consumo : consumo_reflejado

        }

        console.log('Simulacion Terminada');
        console.log(data)
        await fetch('http://localhost:8088/simulacion/',{
            method: 'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res=>res.json()).catch(err=>console.log(`Oops, hay un error: ${err}`)
        ).then(respuesta =>console.log(`Exito : ${respuesta}`));
    

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

const getModelos = async(modelo_id,marca_nombre)=>{
    await fetch(`http://localhost:8088/modelos/${modelo_id}`).then(res=>res.json()).then((data)=>{
    document.getElementById('modelo-dropdown').innerHTML =''
        data.map((modelo)=>{
            document.getElementById('modelo-dropdown').innerHTML +=`<li><a class="dropdown-item" onclick='getDataValue(this)'  href="#" data-consumo ="${modelo.consumo_medio}" data-cilindraje ="${modelo.motor}" data-combustible="${modelo.tipo_combustible}" data-modelo="${modelo.modelo_id}">${modelo.nombre_modelo}</a></li>`
    });
  }).catch((error)=>{
    console.log(error)
});
}
