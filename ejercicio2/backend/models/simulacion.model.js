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
            .input('rendimeinto', mssql.Float, simulacion_json.rendimiento_carro)
            .query('INSERT INTO SIMULACION (modelo_id, consumo_actual, escenario, velocidad,rendimiento) VALUES (@modelo_id, @consumo_actual,@escenario_simulacion,@velocidad, @rendimeinto);');    
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
            .query('select marca.nombre ,modelo.nombre_modelo,simulacion.consumo_actual,'
            +'simulacion.escenario,simulacion.velocidad, simulacion.rendimiento from simulacion join modelo on simulacion.modelo_id=modelo.modelo_id '+
            'join marca on modelo.marca_id=MARCA.marca_id');
        return (await simulaciones).recordsets;
    } catch (err) {
        console.log(`Error en la base de datos: ${err}`)
    }finally{
        pool.close()
    }
}

const obtenerSimulacion = async(modelo_id)=>{
    let pool;
    try{
        pool = await mssql.connect(bdConfig.bdconfig);
        let sim = pool.request()
            .input('modelo_id',mssql.Int,modelo_id)
            .query('select marca.nombre,modelo.motor, modelo.tipo_combustible ,modelo.nombre_modelo,simulacion.consumo_actual, simulacion.escenario,simulacion.velocidad, simulacion.rendimiento from simulacion join modelo on simulacion.modelo_id=modelo.modelo_id join marca on modelo.marca_id=MARCA.marca_id where simulacion.modelo_id=@modelo_id');
        return (await sim).recordsets;
    }catch(err){
        console.log(`Error en la base de datos: ${err}`)
    }finally{
        pool.close();
    }
}

const obtenerSimulacionEscenario = async(escenario)=>{
    let pool;
    try{
        pool = await mssql.connect(bdConfig.bdconfig);
        let sim = pool.request()
            .input('escenario',mssql.VarChar,escenario)
            .query('select marca.nombre,modelo.motor, modelo.tipo_combustible ,modelo.nombre_modelo,simulacion.consumo_actual, simulacion.escenario,simulacion.velocidad, simulacion.rendimiento from simulacion join modelo on simulacion.modelo_id=modelo.modelo_id join marca on modelo.marca_id=MARCA.marca_id where simulacion.escenario=@escenario');
        return (await sim).recordsets;
    }catch(err){
        console.log(`Error en la base de datos: ${err}`)
    }finally{
        pool.close();
    }
}


module.exports={
    insertarSimulacion,
    obtenerSimulacion,
    obtenerSimulaciones,
    obtenerSimulacionEscenario
}
