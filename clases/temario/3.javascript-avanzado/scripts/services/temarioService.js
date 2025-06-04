export class TemarioService {
    constructor(nombreArchivo) {
        this.rutaArchivo = `${nombreArchivo}`;
    }

    async obtenerTemario() {
        try {
            const respuesta = await fetch(this.rutaArchivo);
            if (!respuesta.ok)
                throw new Error('No se pudo cargar el archivo JSON.');
            
            return await respuesta.json();
        } catch (error) {
            console.error('Error obteniendo temario:', error);
            throw error;
        }
    }
}