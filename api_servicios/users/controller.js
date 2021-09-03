const { sequelize, User, prueba_relacion } = require('../../acceso_datos/models')


exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll()

        return res.json(users)
    } catch (err) {
        console.log(err)
        return res.status(500)
    }
}

exports.getUser = async (req, res) => {
    const id = req.params.Id
    try {
        const user = await User.findOne({ where: { id } })

        return res.json(user)
    } catch (err) {
        console.log(err)
        return res.status(500)
    }
}

exports.CreateUser = async (req, res) => {
    const { nombre, rut, email } = req.body
    try {
        const user = await User.create({ nombre, rut, email })

        return res.json(user)
    } catch (err) {
        console.log(err)
        return res.status(500)
    }
}

exports.UpdateUser = async (req, res) => {
    const { id, nombre, rut, email } = req.body
    try {
        const user = await User.findOne({ where: { id } })
        user.nombre = nombre
        user.rut = rut
        user.email = email

        await user.save()

        return res.json(user)
    } catch (err) {
        console.log(err)
        return res.status(500)
    }
}

exports.DeleteUser = async (req, res) => {
    const id = req.params.Id
    try {
        const user = await User.findOne({ where: { id } })

        await user.destroy()

        const users = await User.findAll()

        return res.json(users)
    } catch (err) {
        console.log(err)
        return res.status(500)
    }
}


