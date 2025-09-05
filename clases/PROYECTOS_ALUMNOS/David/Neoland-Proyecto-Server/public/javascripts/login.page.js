function main() {
    const form = document.querySelector("#login-form")

    if (!form) return null

    form.addEventListener("submit", async (event) => {
        event.preventDefault()

        const email = document.querySelector("#login-email").value
        const password = document.querySelector("#login-password").value

        try {
            console.log("Ejecutando funcion send form")

            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })

            if (response.ok) {
                window.location.href = '/dashboard'
            } else {
                alert("Credenciales incorrectas")
            }
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    })
}

document.addEventListener("DOMContentLoaded", main)