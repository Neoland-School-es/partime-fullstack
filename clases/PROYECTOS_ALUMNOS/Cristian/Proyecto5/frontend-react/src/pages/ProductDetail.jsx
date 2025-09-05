import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../api/products'
import { registrarCompra } from '../api/ventas'

const eur = (v, moneda='EUR') =>
  new Intl.NumberFormat('es-ES', { style: 'currency', currency: moneda }).format(v ?? 0)

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const data = await getProduct(id)
        setProduct(data)
        setError('')
      } catch (e) {
        console.error(e)
        setError('No se pudo cargar el producto')
      } finally {
        setLoading(false)
      }
    })()
  }, [id])

  const handleBuy = async () => {
    try {
      await registrarCompra(product)
      alert('Compra registrada ✅')
    } catch (err) {
      console.error(err)
      alert('No se pudo registrar la compra')
    }
  }

  if (loading) return <p>Cargando…</p>
  if (error) return <p>{error}</p>
  if (!product) return <p>Producto no encontrado</p>

  return (
    <section className="detail">
      {(product.imagenUrl || product.imagen) && (
        <img src={product.imagenUrl || product.imagen} alt={product.nombre} className="detail__img" />
      )}
      <div className="detail__info">
        <h1>{product.nombre}</h1>
        <p className="detail__price">{eur(product.precio, product.moneda)}</p>
        <p>ID: {product._id || product.id}</p>
        <button className="btn btn--primary" onClick={handleBuy}>Comprar</button>
      </div>
    </section>
  )
}
