function main() {
    document.querySelector("#logout-btn").addEventListener("click", async (event) => {
        event.preventDefault()

        try {
            const response = await fetch('/api/users/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (response.ok) {
                alert("Sesión cerrada correctamente")
                window.location.href = '/'
            }
        } catch (error) {
            console.log(error)
        }
    })
}

document.addEventListener("DOMContentLoaded", main)