
//Script para poder manipular el movimiento del carro 


/**
 * 
 * Funciones para Animar
 * 
 */

if (window.localStorage.getItem('simulacion')!=null){
    window.localStorage.clear();
}



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
        pausaAnimacion = true;
    }
}

  const animacionController = (id, claseRemover, claseAgregar)=>{
    document.getElementById(`${id}`).classList.remove(`${claseRemover}`);
    document.getElementById(`${id}`).classList.add(`${claseAgregar}`);
  }

const porDos = ()=>{

}

const porTres = ()=>{

}

const porDefecto = ( )=>{
    
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

var data = {}

/**
 *Esta funcion sirve para obtener datos de manera asyncrona, no del frontend, si se usa en el frontend, seteara los valores a null
 */

const getMarcaValue = ()=>{
    let element = document.getElementById('marcas-dropdown');
    marca = element.options[element.selectedIndex].getAttribute('data-marca');
}
const getDataValue = ()=>{
    let element = document.getElementById('modelo-dropdown');
    modelo = element.options[element.selectedIndex].getAttribute('data-nombremodelo');
    id_modelo  = element.options[element.selectedIndex].getAttribute('data-modelo');
    cilindraje = element.options[element.selectedIndex].getAttribute('data-cilindraje')
    tipo_combustible = element.options[element.selectedIndex].getAttribute('data-combustible')
    consumo_medio = element.options[element.selectedIndex].getAttribute('data-consumo');
    transmision = element.options[element.selectedIndex].getAttribute('data-transmision')
    document.getElementById('transmision-input').value=`${transmision}`
    document.getElementById('cilindraje-input').value =`${cilindraje}`;
    document.getElementById('combustible-input').value =`${tipo_combustible}`
}

/**
 *  Esta funcion si sirve para obtener algunos valores del frontend, de manera sincrona, para dropdowns
 *  utilizar esta para eso, no para asyncs. 
 *
 */


const getFrontEscenarioValue = ()=>{
    escenario = document.getElementById('escenario-dropdown').value;
}

const getFrontVelocidadValue = ()=>{
    velocidad = parseInt(document.getElementById('velocidad-dropdown').value);
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

            animacionMainController('reanudar');
            velocidad_carro =numeroAleatorioVelocidad(0,60);
            if (escenario == 'carretera') {
                for (let i = 0; i <= cantidadCombustible; i++) {
                    setTimeout(()=>{
                    if(pausaAnimacion){
                        console.log('pausa')
                    }
                        /*
                         *Hay menos distancia por los factores de caretera o ciudad y la velocidad entonces provoca mas consumo de combustible y hace menos distancia.
                            * */
                        aux_combustible = i;
                        kilometros_recorridos = (i*consumo_medio).toFixed(2);
                        consumo_medio -=((kilometros_recorridos/cantidadCombustible)*0.05).toFixed(2);
                        rendimiento = (consumo_medio/cantidadCombustible).toFixed(2);
                        consumo_reflejado= ((kilometros_recorridos/cantidadCombustible)*31.75).toFixed(2);
                        document.getElementById('front-consumo').innerHTML =`${i} Litros`;
                        document.getElementById('front-kmrecorrido').innerHTML=` ${kilometros_recorridos} KM`;
                        console.log(`Combusitble Consumido: ${aux_combustible} Litros \n Kilometros Recorrido: ${kilometros_recorridos} Kilometros\n  Velocidad: ${velocidad_carro}Km/H \n consumo medio: ${consumo_medio}\n Consumo Reflejado: Lps. ${consumo_reflejado}`);
                        if (i==cantidadCombustible){
                            
                                animacionMainController('pausar');
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
                        document.getElementById('front-consumo').innerHTML =`${i} Litros`;
                        document.getElementById('front-kmrecorrido').innerHTML=` ${kilometros_recorridos} KM`;
                        console.log(`Combusitble Consumido: ${aux_combustible} Litros \n Kilometros Recorrido: ${kilometros_recorridos} Kilometros\n  Velocidad: ${velocidad_carro}Km/H \n consumo medio: ${consumo_medio}\n Consumo Reflejado: Lps. ${consumo_reflejado}`);
                        if (i==cantidadCombustible){
                            animacionMainController('pausar');
                                this.simulacionTerminada();                   
                        }
                    },i*2000);
                    
                }
            }
            console.log(rendimiento);
            break;

        case 2:
            animacionMainController('reanudar');
            velocidad_carro = numeroAleatorioVelocidad(61,120);
            if(escenario == 'carretera'){
                for (let i=0 ; i<=cantidadCombustible; i++) {
                    setTimeout(()=>{
                        aux_combustible = i;
                        kilometros_recorridos = (i*consumo_medio).toFixed(2);
                        consumo_medio-=((kilometros_recorridos/cantidadCombustible)*0.20).toFixed(2);
                        rendimiento = (consumo_medio/cantidadCombustible).toFixed(2);
                        consumo_reflejado = ((kilometros_recorridos/cantidadCombustible)*31.75).toFixed(2);
                        document.getElementById('front-consumo').innerHTML =`${i} Litros`;
                        document.getElementById('front-kmrecorrido').innerHTML=` ${kilometros_recorridos} KM`;
                        console.log(`Combusitble Consumido: ${aux_combustible} Litros \n Kilometros Recorrido: ${kilometros_recorridos} Kilometros\n  Velocidad: ${velocidad_carro}Km/H \n consumo medio: ${consumo_medio}\n Consumo Reflejado: Lps. ${consumo_reflejado}`);
                        if (i==cantidadCombustible){
                            animacionMainController('pausar');
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
                        document.getElementById('front-consumo').innerHTML =`${i} Litros`;
                        document.getElementById('front-kmrecorrido').innerHTML=` ${kilometros_recorridos} KM`;
                        console.log(`Combusitble Consumido: ${aux_combustible} Litros \n Kilometros Recorrido: ${kilometros_recorridos} Kilometros\n  Velocidad: ${velocidad_carro}Km/H \n consumo medio: ${consumo_medio}\n Consumo Reflejado: Lps. ${consumo_reflejado}`);
                        if (i==cantidadCombustible){
                            animacionMainController('pausar');
                                this.simulacionTerminada();                   
                        }
                    },  i*2000);
                    
                }
            }
            break;

        case 3:
            animacionMainController('reanudar');
            velocidad_carro = numeroAleatorioVelocidad(121,180);
            if (escenario == 'carretera') { 
                for (let i=0 ; i<=cantidadCombustible; i++) {
                    setTimeout(()=>{
                        aux_combustible = i;
                        kilometros_recorridos = (i*consumo_medio).toFixed(2);
                        consumo_medio-=((kilometros_recorridos/cantidadCombustible)*0.30).toFixed(2);
                        rendimiento = (consumo_medio/cantidadCombustible).toFixed(2);
                        consumo_reflejado = ((kilometros_recorridos/cantidadCombustible)*31.75).toFixed(2);
                        document.getElementById('front-consumo').innerHTML =`${i} Litros`;
                        document.getElementById('front-kmrecorrido').innerHTML=` ${kilometros_recorridos} KM`;
                        console.log(`Combusitble Consumido: ${aux_combustible} Litros \n Kilometros Recorrido: ${kilometros_recorridos} Kilometros\n  Velocidad: ${velocidad_carro}Km/H \n consumo medio: ${consumo_medio}\n Consumo Reflejado: Lps. ${consumo_reflejado}`);
                        if (i==cantidadCombustible){
                                animacionMainController('pausar');
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
                        document.getElementById('front-consumo').innerHTML =`${i} Litros`;
                        document.getElementById('front-kmrecorrido').innerHTML=` ${kilometros_recorridos} KM`;
                        console.log(`Combusitble Consumido: ${aux_combustible} Litros \n Kilometros Recorrido: ${kilometros_recorridos} Kilometros\n  Velocidad: ${velocidad_carro}Km/H \n consumo medio: ${consumo_medio}\n Consumo Reflejado: Lps. ${consumo_reflejado}`);
                        if (i==cantidadCombustible){
                            animacionMainController('pausar');
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
        data = {
            modelo:id_modelo,
            velocidad: parseFloat(velocidad_carro),
            escenario_sim : escenario,
            consumo : consumo_reflejado

        }

        console.log('Simulacion Terminada');
        
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

const reestablecerValores = ()=>{
    data = {}
    document.getElementById('cantidad-combustible').value=''; 
    document.getElementById('front-consumo').innerHTML =``;
    document.getElementById('front-kmrecorrido').innerHTML=``;
    document.getElementById('transmision-input').value=``;
    document.getElementById('cilindraje-input').value =``;
    document.getElementById('combustible-input').value =``;
}


const setDataModalResultados = ()=>{
    /**
     * Para ver si exite datos dentro del json, si no existen mostrara un modal vacio o con un mensaje que diga que no la realizado una simulacion.....
     * en caso contrario, mostrara los datos del json. Esa sera la simulacion actual.
     * 
     */
    if (isEmpty(data)){
        document.getElementById('tableCaption').innerHTML+=`<caption style="font-weight: bold; color:black;">NO SE HA REALIZADO NINGUNA SIMULACIÓN</caption>`;
        document.getElementById('comparativa-btn').disabled = true;
    }else{ 
        document.getElementById('comparativa-btn').disabled = false;
        document.getElementById('resultado-marca').innerHTML = `${marca}`;
        document.getElementById('resultado-modelo').innerHTML=`${modelo}`;
        document.getElementById('resultado-combustible').innerHTML = `${aux_combustible} Litros`;
        document.getElementById('resultado-rendimiento').innerHTML = `${rendimiento} KM/Litro`;
        document.getElementById('resultado-consumo').innerHTML=  `Lps.${consumo_reflejado}`
        window.localStorage.setItem('simulacion',JSON.stringify(data));
    }


}

//funcion para saber si ujn objeto Json esta vacio
//

const isEmpty = (o)=>Object.keys(o).length ===0;



/**
 * 
 * Axios para la Conexion al Backend
 * 
 */



fetch('http://localhost:8088/carros/marcas').then(res=>res.json()).then((data)=>{
    document.getElementById('marcas-dropdown').innerHTML ='<option selected>Elija una Marca</option>'
    data.map((marca)=>{

        document.getElementById('marcas-dropdown').innerHTML += `<option data-marca="${marca.nombre}" value="${marca.marca_id}">${marca.nombre}</option>`
  });
}).catch((error)=>{
    console.log(error)
});

const getModelos = async()=>{
    mod_id = document.getElementById('marcas-dropdown').value
    
    await fetch(`http://localhost:8088/modelos/${mod_id}`).then(res=>res.json()).then((data)=>{
        document.getElementById('modelo-dropdown').innerHTML =''
        data.map((modelo)=>{
            document.getElementById('modelo-dropdown').innerHTML +=`<option data-nombremodelo ="${modelo.nombre_modelo}" data-transmision="${modelo.transmision}" data-consumo ="${modelo.consumo_medio}" data-cilindraje ="${modelo.motor}" data-combustible="${modelo.tipo_combustible}" data-modelo="${modelo.modelo_id}">${modelo.nombre_modelo}</option>`
    });
  }).catch((error)=>{
    console.log(error)
});
}
