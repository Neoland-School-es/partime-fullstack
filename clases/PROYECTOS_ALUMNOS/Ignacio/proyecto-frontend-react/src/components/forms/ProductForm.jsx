import React, { useState, useEffect } from 'react';

export default function ProductForm({ 
  producto = null, // null para crear, objeto para editar
  onSubmit,
  onCancel,
  isLoading = false
}) {
  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    descripcion: '',
    categoria: '',
    material: '',
    color: '',
    cantidad: '',
    imagen: ''
  });

  const [errors, setErrors] = useState({});

  // Cargar datos del producto si estamos editando
  useEffect(() => {
    if (producto) {
      setFormData({
        nombre: producto.nombre || '',
        precio: producto.precio?.toString() || '',
        descripcion: producto.descripcion || '',
        categoria: producto.categoria || '',
        material: producto.material || '',
        color: producto.color || '',
        cantidad: producto.cantidad?.toString() || '',
        imagen: producto.imagen || ''
      });
    }
  }, [producto]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio';
    }
    
    if (!formData.precio || isNaN(formData.precio) || parseFloat(formData.precio) <= 0) {
      newErrors.precio = 'El precio debe ser un número mayor a 0';
    }
    
    if (!formData.descripcion.trim()) {
      newErrors.descripcion = 'La descripción es obligatoria';
    }
    
    if (!formData.categoria.trim()) {
      newErrors.categoria = 'La categoría es obligatoria';
    }
    
    if (!formData.cantidad || isNaN(formData.cantidad) || parseInt(formData.cantidad) < 0) {
      newErrors.cantidad = 'La cantidad debe ser un número mayor o igual a 0';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const dataToSubmit = {
      ...formData,
      precio: parseFloat(formData.precio),
      cantidad: parseInt(formData.cantidad)
    };

    onSubmit(dataToSubmit);
  };

  const inputStyle = {
    width: '100%',
    padding: '8px 12px',
    border: '2px solid #DFE1E6',
    borderRadius: '4px',
    fontSize: '14px',
    fontFamily: 'inherit'
  };

  const errorInputStyle = {
    ...inputStyle,
    borderColor: '#DE350B'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '4px',
    fontWeight: '500',
    color: '#172B4D',
    fontSize: '14px'
  };

  const errorStyle = {
    color: '#DE350B',
    fontSize: '12px',
    marginTop: '4px'
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Nombre */}
      <div style={{ marginBottom: '16px' }}>
        <label style={labelStyle}>
          Nombre del producto *
        </label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
          style={errors.nombre ? errorInputStyle : inputStyle}
          placeholder="Ej: Mesa de centro"
        />
        {errors.nombre && <div style={errorStyle}>{errors.nombre}</div>}
      </div>

      {/* Precio */}
      <div style={{ marginBottom: '16px' }}>
        <label style={labelStyle}>
          Precio (€) *
        </label>
        <input
          type="number"
          name="precio"
          value={formData.precio}
          onChange={handleInputChange}
          style={errors.precio ? errorInputStyle : inputStyle}
          placeholder="299.99"
          step="0.01"
          min="0"
        />
        {errors.precio && <div style={errorStyle}>{errors.precio}</div>}
      </div>

      {/* Descripción */}
      <div style={{ marginBottom: '16px' }}>
        <label style={labelStyle}>
          Descripción *
        </label>
        <textarea
          name="descripcion"
          value={formData.descripcion}
          onChange={handleInputChange}
          style={{
            ...(errors.descripcion ? errorInputStyle : inputStyle),
            height: '80px',
            resize: 'vertical'
          }}
          placeholder="Describe las características del producto..."
        />
        {errors.descripcion && <div style={errorStyle}>{errors.descripcion}</div>}
      </div>

      {/* Categoría y Material en fila */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '16px',
        marginBottom: '16px'
      }}>
        <div>
          <label style={labelStyle}>
            Categoría *
          </label>
          <input
            type="text"
            name="categoria"
            value={formData.categoria}
            onChange={handleInputChange}
            style={errors.categoria ? errorInputStyle : inputStyle}
            placeholder="Mesas"
          />
          {errors.categoria && <div style={errorStyle}>{errors.categoria}</div>}
        </div>
        
        <div>
          <label style={labelStyle}>
            Material
          </label>
          <input
            type="text"
            name="material"
            value={formData.material}
            onChange={handleInputChange}
            style={inputStyle}
            placeholder="Madera de roble"
          />
        </div>
      </div>

      {/* Color y Cantidad en fila */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '16px',
        marginBottom: '16px'
      }}>
        <div>
          <label style={labelStyle}>
            Color
          </label>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleInputChange}
            style={inputStyle}
            placeholder="Nogal"
          />
        </div>
        
        <div>
          <label style={labelStyle}>
            Cantidad *
          </label>
          <input
            type="number"
            name="cantidad"
            value={formData.cantidad}
            onChange={handleInputChange}
            style={errors.cantidad ? errorInputStyle : inputStyle}
            placeholder="10"
            min="0"
          />
          {errors.cantidad && <div style={errorStyle}>{errors.cantidad}</div>}
        </div>
      </div>

      {/* Imagen */}
      <div style={{ marginBottom: '24px' }}>
        <label style={labelStyle}>
          Nombre del archivo de imagen
        </label>
        <input
          type="text"
          name="imagen"
          value={formData.imagen}
          onChange={handleInputChange}
          style={inputStyle}
          placeholder="mesa-centro.jpg"
        />
        <div style={{ fontSize: '12px', color: '#6B778C', marginTop: '4px' }}>
          Solo el nombre del archivo (ej: mesa-centro.jpg). Debe estar en src/assets/images/
        </div>
      </div>

      {/* Botones */}
      <div style={{ 
        display: 'flex', 
        gap: '12px', 
        justifyContent: 'flex-end',
        borderTop: '1px solid #DFE1E6',
        paddingTop: '16px'
      }}>
        <button
          type="button"
          onClick={onCancel}
          disabled={isLoading}
          style={{
            padding: '10px 20px',
            border: '2px solid #DFE1E6',
            borderRadius: '4px',
            backgroundColor: 'white',
            color: '#172B4D',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            fontSize: '14px',
            opacity: isLoading ? 0.5 : 1
          }}
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={isLoading}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: isLoading ? '#6B778C' : '#0052CC',
            color: 'white',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            fontSize: '14px'
          }}
        >
          {isLoading ? 'Guardando...' : (producto ? 'Actualizar' : 'Crear')} Producto
        </button>
      </div>
    </form>
  );
}