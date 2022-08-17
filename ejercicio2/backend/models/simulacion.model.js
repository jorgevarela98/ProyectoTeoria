const bdConfig = require ('../config/bd.config');
const mssql = require ('mssql');


const insertarSimulacion = async(simulacion_json)=>{
    let pool;
    try {
        pool = await mssql.connect(bdConfig.bdconfig);
        let simulacion = await pool.request()
            .input('modelo_id',mssql.Int, simulacion_json.modelo)
            .input('consumo_actual',mssql.Float, simulacion_json.consumo)
            .input('escenario_simulacion',mssql.VarChar, simulacion_json.escenario_sim)
            .input('velocidad',mssql.Float, simulacion_json.velocidad)
            .query('INSERT INTO SIMULACION (modelo_id, consumo_actual, escenario, velocidad) VALUES (@modelo_id, @consumo_actual,@escenario_simulacion,@velocidad);');    
    } catch (error){
        console.log(`Error en la base de datos: ${error}`)
    }finally{
        pool.close();
    }
    
}

const obtenerSimulaciones = async()=>{
    let pool; 
    try {
        pool = await mssql.connect(bdConfig.bdconfig);
        let simulaciones = pool.request()
            .query('select marca.nombre ,modelo.nombre,simulacion.consumo_actual,'
            +'simulacion.escenario,simulacion.velocidad from simulacion join modelo on simulacion.modelo_id=modelo.modeloID'+
            'join marca on modelo.marca_ID=MARCA.marca_id');
        return (await simulaciones).recordsets;
    } catch (err) {
        console.log(`Error en la base de datos: ${err}`)
    }finally{
        pool.close()
    }
}

const obtenerSimulacion = async(simulacion_id)=>{
    let pool;
    try{
        pool = await mssql.connect(bdConfig.bdconfig);
        let simulacion = pool.request()
            .input('simulacion_id',mssql.Int,simulacion_id)
            .query('select marca.nombre ,modelo.nombre,simulacion.consumo_actual,'+
            'simulacion.escenario,simulacion.velocidad from simulacion join modelo on simulacion.modelo_id=modelo.modeloID'+
            +'join marca on modelo.marca_ID=MARCA.marca_id where simulacion_id=@simulacion_id');
        return (await simulacion).recordsets;
    }catch(err){
        console.log(`Error en la base de datos: ${err}`)
    }finally{
        pool.close();
    }
}

module.exports={
    insertarSimulacion,
    obtenerSimulacion,
    obtenerSimulaciones
}
