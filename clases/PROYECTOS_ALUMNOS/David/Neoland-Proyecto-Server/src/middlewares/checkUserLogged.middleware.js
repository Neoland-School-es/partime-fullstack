import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

async function checkUserLogged(req, res, next) {
    const token = req.cookies?.my_secret_token

    if (!token) return res.status(401).json({ message: 'Acceso denegado. Inicia sesión para continuar'})
    
    try {
        const data = jwt.verify(token, process.env.CLAVE_SECRETA_COOKIE)

        if (!data) res.render("error")

        next()
    } catch (error) {
        res.status(401).json({ message: 'Acceso denegado. Inicia sesión para continuar'})
    }
}

export { checkUserLogged }