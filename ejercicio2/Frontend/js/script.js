
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
 * Axios para la Conexion al Backend
 * 
 */



fetch('http://localhost:8088/carros/marcas').then(res=>res.json()).then((data)=>{
  data.map((marca)=>{
    document.getElementById('marcas-dropdown').innerHTML += `<li><a class="dropdown-item" href="#" onclick="getModelos(${marca.marca_id})">${marca.nombre}</a></li>`
  });
  
}).catch((error)=>{
    console.log(error)
});

const getModelos = async(modelo_id)=>{
  console.log(modelo_id)
}
