const bdConfig = require ('../config/bd.config');
const mssql = require ('mssql');


const insertarSimulacion = async()=>{
    let pool; 
    try {
        pool = await mssql.connect(bdConfig.bdconfig);
        let simulacion = pool.request()
            .input()
            .query();    
    } catch (error){
        console.log(`Error en la base de datos: ${error}`)
    }finally{
        pool.close();
    }
    
}


module.exports={
    insertarSimulacion
}
