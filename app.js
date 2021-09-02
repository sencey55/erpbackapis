const express = require('express')
const { sequelize, User, prueba_relacion } = require('./acceso_datos/models')

const app = express()

app.use(express.json())

app.post('/users', async (req, res) => {
    const { nombre, rut, email } = req.body

    try {
        const user = await User.create({ nombre, rut, email })

        return res.json(user)
    } catch (err) {
        console.log(err)
        return res.status(500)
    }
})

app.get('/users', async (req, res) => {

    try {
        const users = await User.findAll()

        return res.json(users)
    } catch (err) {
        console.log(err)
        return res.status(500)
    }

})

app.get('/users/:uuid', async (req, res) => {
    const uuid = req.params.uuid;
    try {
        const user = await User.findOne({
            where: { uuid: uuid }
        })

        if (user === null) {
            console.log('Not found!');
        } else {
            console.log(user instanceof User); // true
            console.log(user.uuid); // 'uuid
        }
        return res.json(user)

    } catch (err) {
        console.log(err)
        return res.status(500)
    }

})

app.post('/prueba_relacions', async (req, res) => {
    const { userUuid, direccion, telefono } = req.body
    try {
        const user = await User.findOne({
            where: { uuid: userUuid }
        })

        const prueba_rela = await prueba_relacion.create({ direccion, telefono, userId: user.id })
        return res.json(prueba_rela)
    } catch (err) {
        console.log(err)
        return res.status(500)
    }
})

app.get('/prueba_relacions', async (req, res) => {

    try {
        const prueba_rel = await prueba_relacion.findAll({include: 'user'})

        return res.json(prueba_rel)
    } catch (err) {
        console.log(err)
        return res.status(500)
    }

})

const PORT = process.env.PORT || 3000;


app.listen({ port: PORT }, async () => {
    console.log(`API escuchando en http://localhost:${PORT}`)
    await sequelize.authenticate()
    console.log(`Base de datos conectada`)
})