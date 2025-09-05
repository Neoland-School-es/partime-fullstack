import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

import { userModel } from '../models/user.model.js'

async function getAllUsers(req, res) {
    try {
        const data = await userModel.find()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}

async function getUser(req, res) {
    try {
        const data = await userModel.findById(req.params.id)
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}

async function newUser(req, res) {
    try {
        const { name, email, password } = req.body
        const saltRound = 10
        const encryptedPassword = await bcrypt.hash(password, saltRound)

        const newUser = new userModel({
            name: name,
            email: email,
            password: encryptedPassword
        })

        await newUser.save()

        res.status(200).json({
            success: true,
            message: 'Registro exitoso',
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email
            }
        })
    } catch (error) {
        console.log(error)
    }
}

async function updateUser(req, res) {
    try {
        const { name, email, password } = req.body
        const userCheck = await userModel.findById(req.params.id)

        if (!userCheck) { res.status(404).send("Usuario no encontrado")}

        const data = await userModel.findByIdAndUpdate(req.params.id, {name, email, password})
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}

async function deleteUser(req, res) {
    try {
        const userCheck = await userModel.findById(req.params.id)

        if (!userCheck) { res.status(404).send("Usuario no encontrado")}

        const data = await userModel.findByIdAndDelete(req.params.id)
        res.send(`El usuario ${data} ha sido eliminado`)
    } catch (error) {
        console.log(error)
    }
}

async function loginUser(req, res) {
    try {
        console.log("Ejecutando funcion login")
        const { email, password } = req.body
        const user = await userModel.findOne({ email })
        const passwordCheck = await bcrypt.compare(password, user.password)

        if (!user || !passwordCheck) return res.status(401).send('Credenciales incorrectas')
        
        const token = jwt.sign({ id: user._id }, process.env.CLAVE_SECRETA_COOKIE, { expiresIn: '10m' })
        res.cookie(process.env.CLAVE_SECRETA_COOKIE, token)

        res.status(200).json({
            success: true,
            message: 'Login exitoso',
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        })
    } catch (error) {
        console.log(error)
    }
}

async function logoutUser(req, res) {
    try {
        res.clearCookie(process.env.CLAVE_SECRETA_COOKIE)
        res.json("Sesión cerrada")
    } catch (error) {
        console.log(error)
    }
}

export { getAllUsers, getUser, newUser, updateUser, deleteUser, loginUser, logoutUser }