import { readFile, writeFile } from 'fs/promises';
const RUTA_ARCHIVO = './src/servers-express/server-express-2-medium/visitas.json';

export async function registrarVisita(ruta) {
    try {
        const data = await readFile(RUTA_ARCHIVO, 'utf-8');
        const visitas = JSON.parse(data);
        visitas.visitasTotales++;

        if (ruta === 'galeria') {
            visitas.galeria++;
        }

        await writeFile(RUTA_ARCHIVO, JSON.stringify(visitas, null, 2));
        return visitas;
    } catch (error) {
        console.error('Error al registrar visita:', error);
        return null;
    }
}
