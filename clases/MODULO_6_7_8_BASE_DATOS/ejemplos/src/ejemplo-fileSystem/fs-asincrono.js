import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log("Directorio del script:", __dirname);

console.log("inicio");

try {
    // 1. Crear carpeta-demo
    const carpetaDemo = path.join(__dirname, 'carpeta-demo');
    await fs.mkdir(carpetaDemo, { recursive: true });

    // 2. Crear archivo
    const saludoInicial = 'Hola! Este es un archivo de demostración.\n¡Bienvenidos a Node.js!\n';
    const archivoSaludo = path.join(carpetaDemo, 'saludo.txt');
    await fs.writeFile(archivoSaludo, saludoInicial);

    // 3. Crear carpeta copia-demo
    const carpetaCopia = path.join(__dirname, 'copia-demo');
    await fs.mkdir(carpetaCopia, { recursive: true });

    // 4. Leer contenido del archivo original
    const contenidoOriginal = await fs.readFile(archivoSaludo, 'utf-8');

    // 5. Agregar información adicional
    const informacionAdicional = `
        --- Información adicional ---
        Esta es una copia extendida del archivo original.
    `;
    const contenidoCompleto = contenidoOriginal + informacionAdicional;

    // 6. Crear archivo extendido en copia-demo + información adicional
    const archivoExtendido = path.join(carpetaCopia, 'saludo-extendido.txt');
    await fs.writeFile(archivoExtendido, contenidoCompleto);

    console.log("\nfin");
} catch (error) {
    console.error("Ocurrió un error:", error);
}

console.log("\nfin")