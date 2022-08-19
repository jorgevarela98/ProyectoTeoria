var comp_data = JSON.parse(window.localStorage.getItem('simulacion'));

var carro_sel = {}
if (window.localStorage.getItem('carro_sel')!=null){
    window.localStorage.clear();
}

var carro_a_comparar = {}
/*
 *
 *FUNCIONES PARA LA BASE DE DATOS 
 *
    * */

fetch(`http://localhost:8088/simulacion/simulacion/${comp_data.modelo}`).then(res =>res.json()).then(data =>{
    data[0].map(sim =>{
         if(comp_data.velocidad == sim.velocidad && comp_data.escenario_sim == sim.escenario && comp_data.consumo == sim.consumo_actual){
             //Setear los valoers en la tabla de carro encontrado
             document.getElementById('comparacion-marca').innerHTML = ` ${sim.nombre} `;
             document.getElementById('comparacion-modelo').innerHTML = ` ${sim.nombre_modelo} `;
             document.getElementById('comparacion-combustible').innerHTML = ` ${sim.tipo_combustible} `;
             document.getElementById('comparacion-cilindraje').innerHTML = ` ${sim.motor} `;
             document.getElementById('comparacion-velocidad').innerHTML = ` ${sim.velocidad} `;
             document.getElementById('comparacion-escenario').innerHTML = ` ${sim.escenario} `;




             fetch('http://localhost:8088/simulacion/simulaciones').then(res => res.json()).then(data =>{
                data[0].map(sims=>{
                   console.log(sims)
                /*
                 * GENERAAR LAS SIMULACIONES DINAMICAMENTE EN EL SCROLL 
                      *
                     * */
                document.getElementById('scroll').innerHTML+=` <div class="row">
                    <button type="button" id="comparar-carro" class="btn btn-light comparar" data-model = "${sims.nombre_modelo}" data-consumo ="${sims.rendimiento}" data-car="${sims.nombre}" onclick="obtener_carro_bd(this)">${sims.nombre} ${sims.nombre_modelo}   \t  en      ${sims.escenario}  a ${sims.velocidad}  KM/H</button>
                </div>`
                })
            }).catch(e=>console.log(e));



             carro_sel ={
                marca:sim.nombre,
                modelo: sim.nombre_modelo,
                rendimiento : sim.rendimiento
             }
             
            
             //window.localStorage.setItem('carro_sel', JSON.stringify(carro_sel))
         }
    });

    

}).catch(e=>console.log(e));


const obtener_carro_bd = (element)=>{
    
    var marca = element.getAttribute('data-car');
    var modelo = element.getAttribute('data-model');
    var consumo = element.getAttribute('data-consumo')
    console.log(marca)
    carro_a_comparar={
        nombre: marca,
        modelo:modelo,
        consumo
    }
    const carro1 = {
        label: `${carro_sel.marca} ${carro_sel.modelo}`,
        data: [carro_sel.rendimiento, 16.5], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
        backgroundColor: 'rgba(54, 162, 235, 0.2)',  // Color de fondo
        borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
        borderWidth: 1,// Ancho del borde
    };
    const carro2 = {
        label: `${carro_a_comparar.nombre}${carro_a_comparar.modelo}`,
        data: [carro_a_comparar.consumo, 19], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
        backgroundColor: 'rgba(255, 159, 64, 0.2)',// Color de fondo
        borderColor: 'rgba(255, 159, 64, 1)',// Color del borde
        borderWidth: 1,// Ancho del borde
    };
    updateChart(carro1,carro2)

    
}

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



/**
 * 
 * 
 * 
 * 
 * CHARTS
 * 
 * 
 * 
 * 
 * 
 * 
 */


// Obtener una referencia al elemento canvas del DOM
const $grafica = document.querySelector("#grafica");
// Las etiquetas son las que van en el eje X. 
const etiquetas = ["Kilometros por litro"]
// Podemos tener varios conjuntos de datos. Comencemos con uno


// const datosVentas2021 = {
//     label: "Toyota Corolla 1.6",
//     data: [15, 19], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
//     backgroundColor: 'rgba(255, 159, 64, 0.2)',// Color de fondo
//     borderColor: 'rgba(255, 159, 64, 1)',// Color del borde
//     borderWidth: 1,// Ancho del borde
// };

const data = [{x: '1.8 C.C.', net: 150}];
const data2 = [{x: '1.6 C.C.', cogs: 55}];
const datos ={
    labels: etiquetas,
    datasets: [
        {
            label: 'Honda Civic',
            data: data,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            parsing: {
                yAxisKey: 'net'
            }
        },
        {
            label: 'Toyota Corolla',
            data: data2,
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
            parsing: {
                yAxisKey: 'cogs'
            }
        },
        // Aquí más datos...
    ]
}
const tipo = 'bar';
const config = {
    type: tipo,// Tipo de gráfica
    data: datos,
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    steps:10,
                    beginAtZero: true,
                }
            }],
        },
    }
}
var chart = new Chart($grafica,config );

const updateChart=(carro1, carro2)=>{
    datos.datasets[0].label =carro1.label;
    datos.datasets[1].label=carro2.label;
    datos.datasets[0].data =carro1.data;
    datos.datasets[1].data=carro2.data;
    chart.update()
}
// new Chart($grafica, {
//     type: 'bar',// Tipo de gráfica
//     data: {
//         labels: ['1.8 C.C.', '1.6 C.C.'],
//         datasets: [{
//             label: 'Honda Civic',
//             data: data,
//             backgroundColor: 'rgba(54, 162, 235, 0.2)',
//             borderColor: 'rgba(54, 162, 235, 1)',
//             borderWidth: 1,
//             parsing: {
//                 yAxisKey: 'net'
//             }
//         }, {
//             label: 'Toyota Corolla',
//             data: data2,
//             backgroundColor: 'rgba(255, 159, 64, 0.2)',
//             borderColor: 'rgba(255, 159, 64, 1)',
//             borderWidth: 1,
//             parsing: {
//                 yAxisKey: 'cogs'
//             }
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }],
//         },
//     }
// });

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})



