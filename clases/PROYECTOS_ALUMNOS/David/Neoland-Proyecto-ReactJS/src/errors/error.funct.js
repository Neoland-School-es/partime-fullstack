function tryCatchError(error, action) {
    console.error(`Error al ${action} el producto: ${error}`)
    alert(`Error al ${action} el producto.`)
}

function serviceError(data, error) {
    return {
        success: false,
        data: data,
        error: error.message
    }
}

function contextError(error) {
    console.log(`Error en la API: ${error}`)
    throw new Error(error)
}

export { tryCatchError, serviceError, contextError }