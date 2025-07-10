import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log("Directorio del script:", __dirname)

console.log("inicio")

// 1. Crear carpeta-demo
const carpetaDemo = path.join(__dirname, 'carpeta-demo');
fs.mkdirSync(carpetaDemo, { recursive: true });

// 2. Crear archivo
const saludoInicial = 'Hola! Este es un archivo de demostración.\n¡Bienvenidos a Node.js!\n';
const archivoSaludo = path.join(carpetaDemo, 'saludo.txt');
fs.writeFileSync(archivoSaludo, saludoInicial);

// 3. Crear carpeta copia-demo
const carpetaCopia = path.join(__dirname, 'copia-demo');
fs.mkdirSync(carpetaCopia, { recursive: true });

// 4. Leer el contenido del archivo original
const contenidoOriginal = fs.readFileSync(archivoSaludo, 'utf-8');

// 5. Agregar información adicional
const informacionAdicional = `
  --- Información adicional ---
  Esta es una copia extendida del archivo original.
`;

// 6. Crear archivo extendido en copia-demo + información adicional
const contenidoCompleto = contenidoOriginal + informacionAdicional;
const archivoExtendido = path.join(carpetaCopia, 'saludo-extendido.txt');
fs.writeFileSync(archivoExtendido, contenidoCompleto);

console.log("\nfin")