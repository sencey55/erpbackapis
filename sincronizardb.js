//Este comando es para sincronizar los modelos con la base de datos
const {sequelize} = require('./acceso_datos/models');

async function sincronizar(){
    //el force elimina las tablas y las sincroniza nuevamente,
    // asi que solo debemos usarlo para la migración
    await sequelize.sync({force: true})
}

sincronizar()