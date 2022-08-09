
//Script para poder manipular el movimiento del carro 


/**
 * 
 * Funciones para Animar
 * 
 */

 function pararAnimacion(){

    /*
    Pausar
    
    */ 
    document.getElementById('pista').classList.remove('track');
    document.getElementById('llanta').classList.remove('wheel');
    document.getElementById('llanta2').classList.remove('wheel');
    document.getElementById('carro').classList.remove('car');
  
  
    document.getElementById('pista').classList.add('trackstop');
    document.getElementById('llanta').classList.add('wheelstop');
    document.getElementById('llanta2').classList.add('wheelstop');
    document.getElementById('carro').classList.add('carstop');
  }
  function seguirAnimacion(){
  
    document.getElementById('pista').classList.remove('trackstop');
    document.getElementById('llanta').classList.remove('wheelstop');
    document.getElementById('llanta2').classList.remove('wheelstop');
    document.getElementById('carro').classList.remove('carstop');
    /*Quitar Pausa*/
  
  
  
    document.getElementById('pista').classList.add('track');
    document.getElementById('llanta').classList.add('wheel');
    document.getElementById('llanta2').classList.add('wheel');
    document.getElementById('carro').classList.add('car');
  }
  
/**
 * 
 * Axios para la Conexion al Backend
 * 
 */





