const bdConfig = require ('../config/bd.config');
const mssql = require ('mssql');



async function getMarcas(){
    let pool;
    try {
        
        pool = await mssql.connect(bdConfig.bdconfig);
        let marcas = pool.request().query('SELECT * FROM MARCA;')
        return (await marcas).recordset
    } catch (error) {
        console.log(`Error en la petición a la base de datos : ${error}`)
    }finally{
        pool.close();
    }
}

module.exports={
    getMarcas
}