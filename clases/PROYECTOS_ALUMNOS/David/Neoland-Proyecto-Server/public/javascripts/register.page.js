function main() {
    const form = document.querySelector("#login-form")

    if (!form) return null

    form.addEventListener("submit", async (event) => {
        event.preventDefault()

        const name = document.querySelector("#login-name").value
        const email = document.querySelector("#login-email").value
        const password = document.querySelector("#login-password").value

        try {
            console.log("Ejecutando funcion send form")

            const response = await fetch('/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            })

            if (response.ok) {
                alert("Usuario creado correctamente. Inicia sesión para continuar")
                window.location.href = '/api/users/login'
            } else {
                alert("Error")
            }
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    })
}

document.addEventListener("DOMContentLoaded", main)