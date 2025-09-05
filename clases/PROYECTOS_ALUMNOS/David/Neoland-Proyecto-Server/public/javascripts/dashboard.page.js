// import { openModal } from './modal.functions.js'


function main() {
    
    //Variables
    const editBtn = document.querySelectorAll(".btn-edit")
    const deleteBtn = document.querySelectorAll(".btn-delete")
    const newProductForm = document.querySelector("#product-form")
    const editModal = document.querySelector("#edit-modal")
    const editProductForm = document.querySelector("#edit-product-form")
    const modalClose = document.querySelector(".modal-close")
    const cancelBtn = document.querySelector(".btn-cancel")
    
    if (!editBtn || !deleteBtn || !newProductForm || !editProductForm || !modalClose || !cancelBtn) return null
    
    //Funciones modal
    function openModal() {
        editModal.classList.add("show")
        document.body.style.overflow = "hidden"
    }

    function closeModal() {
        editModal.classList.remove("show")
        document.body.style.overflow = "auto"
        editProductForm.reset()
    }

    //Event listener cerrar modal
    modalClose.addEventListener("click", closeModal)
    cancelBtn.addEventListener("click", closeModal)
    
    //Función nuevo producto
    newProductForm.addEventListener("submit", async () => {

        const name = document.querySelector("#new-name").value
        const price = document.querySelector("#new-price").value
        const quantity = document.querySelector("#new-quantity").value

        console.log(name, price, quantity)
        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    price,
                    quantity
                })
            })

            if (response.ok) {
                newProductForm.reset()
            } else {
                alert('Error al crear el producto')
            }
        } catch (error) {
            console.log(error)
        }
    })

    //Función eliminar producto
    deleteBtn.forEach(btn => {
        btn.addEventListener("click", async (event) => {
        
            const id = event.target.getAttribute('data-id')

            if (!id) return null

            if(confirm('¿Seguro que quieres eliminar el producto?')) {
                try {
                    const response = await fetch(`/api/products/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'Accept': 'application/json'
                        }
                    })

                    if (response.ok) {
                        location.reload()
                    }
                } catch (error) {
                    console.log(error)
                    alert('Error al eliminar el producto')
                }
            }
        })
    })

    //Función abrir modal con la info del producto
    editBtn.forEach(btn => {
        btn.addEventListener("click", async (event) => {
            const id = event.target.getAttribute('data-id')
            const name = event.target.getAttribute('data-name')
            const price = event.target.getAttribute('data-price')
            const quantity = event.target.getAttribute('data-quantity')

            if(!id) return null

            // Llenar el formulario del modal con los datos actuales
            document.querySelector("#edit-id").value = id
            document.querySelector("#edit-name").value = name
            document.querySelector("#edit-price").value = price
            document.querySelector("#edit-quantity").value = quantity

            // Abrir el modal
            openModal()
        })
    })

    // Función para editar producto
    editProductForm.addEventListener("submit", async (e) => {
        e.preventDefault()

        const id = document.querySelector("#edit-id").value
        const name = document.querySelector("#edit-name").value
        const price = document.querySelector("#edit-price").value
        const quantity = document.querySelector("#edit-quantity").value

        if(!id) return null

        try {
            const response = await fetch(`/api/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    price,
                    quantity
                })
            })

            if (response.ok) {
                closeModal()
                location.reload()
            } else {
                alert('Error al actualizar el producto')
            }
        } catch (error) {
            console.log(error)
            alert('Error al actualizar el producto')
        }
    })
}

document.addEventListener("DOMContentLoaded", main)