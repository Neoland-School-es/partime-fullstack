import { serviceError } from "../errors/error.funct.js"

const API_URL_PRODUCTS = import.meta.env.VITE_API_URL_PRODUCTS
const API_URL_PURCHASES = import.meta.env.VITE_API_URL_PURCHASES

async function getProductsService() {
    try {
        const res = await fetch(API_URL_PRODUCTS, { method: 'GET' })
        if (!res.ok) { throw new Error(`Error: ${res.status}`) }
        
        const data = await res.json()

        return {
            success: true,
            data: data,
            error: null
        }
        
    } catch (error) {
        serviceError([], error)
    }
}

async function createProduct(productData) {
    try {
        const res = await fetch(API_URL_PRODUCTS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })

        if (!res.ok) { throw new Error(`Error: ${res.status}`)}

        const data = await res.json()

        return {
            success: true,
            data: data,
            error: null
        }
    } catch (error) {
        serviceError(null, error)
    }
}

async function updateProductService(id, product) {
    try {
    
        const res = await fetch(`${API_URL_PRODUCTS}${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })

        if (!res.ok) { throw new Error(`Error: ${res.status}`) }

        const data = await res.json()

        return {
            success: true,
            data: data,
            error: null
        }
    } catch (error) {
        serviceError(null, error)
    }
}

async function deleteProductService(id) {
    try {
        const res = await fetch(`${API_URL_PRODUCTS}${id}`, {
            method: 'DELETE'
        })

        if (!res.ok) { throw new Error(`Error: ${res.status}`) }

        const data = await res.text()

        return {
            success: true,
            data: data,
            error: null
        }
    } catch (error) {
        serviceError(null, error)
    }
}

async function newPurchase(purchaseData) {
    try {

        const res = await fetch(API_URL_PURCHASES, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(purchaseData)
        })

        if (!res.ok) { throw new Error(`Error: ${res.status}`) }

        const data = await res.text()

        return {
            success: true,
            data: data,
            error: null
        }
    } catch (error) {
        serviceError(null, error)
    }
}

export { getProductsService, updateProductService, newPurchase, createProduct, deleteProductService }