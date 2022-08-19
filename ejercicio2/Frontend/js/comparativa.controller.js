var comp_data = JSON.parse(window.localStorage.getItem('simulacion'))













/*
 *
 *FUNCIONES PARA LA BASE DE DATOS 
 *
    * */

fetch(`http://localhost:8088/simulacion/simulacion/${comp_data.modelo}`).then(res =>res.json()).then(data =>{
    console.log(data[0]);
    data[0].map(sim =>{
        if(comp_data.velocidad == sim.velocidad && comp_data.escenario_sim == sim.escenario && comp_data.consumo == sim.consumo_actual){
            //Setear los valoers en la tabla de carro encontrado
            document.getElementById('comparacion-marca').innerHTML = ` ${sim.nombre} `;
            document.getElementById('comparacion-modelo').innerHTML = ` ${sim.nombre_modelo} `;
            document.getElementById('comparacion-combustible').innerHTML = ` ${sim.tipo_combustible} `;
            document.getElementById('comparacion-cilindraje').innerHTML = ` ${sim.motor} `;
            document.getElementById('comparacion-velocidad').innerHTML = ` ${sim.velocidad} `;
            document.getElementById('comparacion-escenario').innerHTML = ` ${sim.escenario} `;
        }
    });
}).catch(e=>console.log(e));

fetch('http://localhost:8088/simulacion/simulaciones').then(res => res.json()).then(data =>{
    data[0].map(sims=>{
        /*
         * GENERAAR LAS SIMULACIONES DINAMICAMENTE EN EL SCROLL 
         *
            * */
        console.log(sims)
    })
}).catch(e=>console.log(e));


fetch('http://localhost:8088/carros/marcas').then(res=>res.json()).then((data)=>{
    document.getElementById('marcas-dropdown').innerHTML ='<option selected>Elija una Marca</option>'
    data.map((marca)=>{

        // document.getElementById('marcas-dropdown').innerHTML += `<option data-marca="${marca.nombre}" value="${marca.marca_id}">${marca.nombre}</option>`
  });
}).catch((error)=>{
    console.log(error)
});

const getModelos = async()=>{
    mod_id = document.getElementById('marcas-dropdown').value
    
    await fetch(`http://localhost:8088/modelos/${mod_id}`).then(res=>res.json()).then((data)=>{
        document.getElementById('modelo-dropdown').innerHTML =''
        data.map((modelo)=>{
            //document.getElementById('modelo-dropdown').innerHTML +=`<option data-nombremodelo ="${modelo.nombre_modelo}" data-transmision="${modelo.transmision}" data-consumo ="${modelo.consumo_medio}" data-cilindraje ="${modelo.motor}" data-combustible="${modelo.tipo_combustible}" data-modelo="${modelo.modelo_id}">${modelo.nombre_modelo}</option>`
    });
  }).catch((error)=>{
    console.log(error)
});
}
