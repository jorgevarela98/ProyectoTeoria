var comp_data = JSON.parse(window.localStorage.getItem('simulacion'))


fetch(`http://localhost:8088/simulacion/simulacion/${comp_data.modelo}`).then(res =>res.json()).then(data =>{
    console.log(data[0]);
    data[0].map(sim =>{
        console.log(sim)
        if(comp_data.velocidad == sim.velocidad && comp_data.escenario_sim == sim.escenario && comp_data.consumo == sim.consumo_actual){
          console.log('carro encontrado')
        }
    });
}).catch(e=>{
    console.log(e);
});




