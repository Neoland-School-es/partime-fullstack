import { useContext } from 'react'

import { ProductsContext } from '../context/products.context'

export function HomePage() {
    const { productsBBDD, addNewPurchase } = useContext(ProductsContext)
    
    return (
        <>
            <main className="main">
                <div className="container">
                    <div className="page-header">
                        <h1 className="page-title">Catálogo de Productos</h1>
                    </div>

                    <div className="product-grid">
                        {productsBBDD.map((product) => (
                            <div key={product._id} className="product-card">
                                <div className="product-info">
                                    <h3 className="product-name">{product.name}</h3>
                                    <div className="product-price">{product.price}</div>
                                    
                                    <button className="btn btn-primary" onClick={() => addNewPurchase(product)}>Comprar</button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </main>
        </>
    )
}
            