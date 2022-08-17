const bdConfig = require ('../config/bd.config');
const mssql = require ('mssql');



const getModelo = async(marca_id)=>{
    let pool;
    try {
        pool = await mssql.connect(bdConfig.bdconfig);
        let marcas = pool.request()
        .input('marca_id',mssql.Int,marca_id)
        .query('SELECT * FROM Modelo WHERE marca_id=@marca_id')
        return (await marcas).recordset
    } catch (error) {
        console.log(`Error en la petición a la base de datos : ${error}`)
    }finally{
        pool.close();
    }
}

module.exports ={
    getModelo
}
