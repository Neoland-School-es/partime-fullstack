import { productModel } from "../models/product.model.js"

async function renderHomepage(req, res) {
    try {
        res.render('index', { title: 'Express' })
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

async function renderDashboard(req, res) {
    try {
        const products = await productModel.find()

        res.render('dashboard', { 
            title: 'Express',
            products: products,
            state: products.length === 0 ? 'empty' : 'ok'
        })
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

async function renderLogin(req, res) {
    try {
        res.render('login', { title: 'Express' })
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

async function renderResgister(req, res) {
    try {
        res.render('register', { title: 'Express' })
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

export { renderHomepage, renderDashboard, renderLogin, renderResgister }