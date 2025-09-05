function privateRoute(req, res, next) {
    if (!req.session || !req.session.id) {
        return res.status(401).json({ message: 'Debes iniciar sesión para continuar.'})
    }
    next()
}

export { privateRoute }