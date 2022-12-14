require('dotenv').config()

var bdconfig = {
    user:  process.env.db_user,
    password: process.env.db_password,
    server: process.env.server_ip,
    database: process.env.db_nombre,
    port : parseInt(process.env.db_port),
    options:{ 
        trustedconnection: false,
        enableArthAbort: true,
        encrypt:false
    }
}


module.exports={
    bdconfig
}