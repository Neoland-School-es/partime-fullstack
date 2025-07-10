# TypeScript

TypeScript es un superset de JavaScript que añade tipado estático opcional. Fue desarrollado por Microsoft y está diseñado para ayudarte a escribir código más claro, robusto y mantenible.

- Detección temprana de errores en tiempo de desarrollo.
- Autocompletado inteligente y sugerencias en editores como VS Code.
- Refactorización segura de código.
- Facilita el trabajo en proyectos grandes o en equipo.
- Se compila a JavaScript estándar, por lo que funciona en cualquier navegador o entorno que use JS.

## Instalar TypeScript

NOTA: Necesitas tener instalado Node.js y npm.

### Instalar TypeScript global

1. Instala TypeScript globalmente "npm install -g typescript".
2. Confirma instalación "tsc -v".

### Instalar TypeScript proyecto

1. paquete: npm install typescript --save-dev

## Configuración básica

Cuando ejecutas tsc --init, se crea un archivo tsconfig.json en tu proyecto. Este archivo define cómo TypeScript debe compilar tu código.

{
  "compilerOptions": {
    "target": "es6",               // Versión de JavaScript de salida
    "module": "commonjs",          // Sistema de módulos
    "strict": true,                // Activa todas las validaciones estrictas
    "outDir": "./dist",            // Carpeta de salida para los .js
    "rootDir": "./src",            // Carpeta donde están los .ts
    "esModuleInterop": true        // Permite importar módulos ES
  },
  "include": ["src/**/*"],         // Archivos a compilar
  "exclude": ["node_modules"]      // Archivos a ignorar
}

## Comandos

- Crea un archivo tsconfig.json con la config: tsc --init
- Compila un archivo .ts a .js: tsc app.ts
- Compila en modo observador (watch mode): tsc app.ts -w
- Observa y compila todos los archivos .ts: tsc -w (con tsconfig.json)

## configuración para mantener el código organizado

/proyecto
|─/src
|  └──app.ts
|─/scripts
|  └── app.js
└── tsconfig.json

## Tipado básico

let mensaje: string = "Hola TypeScript";
let edad: number = 25;
let esActivo: boolean = true;

## Arreglos

let numeros: number[] = [1, 2, 3, 4];
let nombres: string[] = ["Ana", "Luis", "Carlos"];
let booleanos: boolean[] = [true, false, true];

## Funciones

function saludar(nombre: string): void {
  console.log("Hola " + nombre);
}

function sumar(a: number, b: number): number {
  return a + b;
}

function saludar(nombre?: string): void {
  if (nombre) {
    console.log("Hola " + nombre);
  } else {
    console.log("Hola mundo");
  }
}

## type (alias de tipo)

type UsuarioID = string | number;

type Usuario = {
  id: UsuarioID;
  nombre: string;
  activo: boolean;
};

## interface (estructura de objetos)

interface IUsuario {
  id: number;
  nombre: string;
  activo: boolean;
}

## Genéricos

Los genéricos permiten crear componentes reutilizables, que funcionan con diferentes tipos sin perder el tipado. Son como “tipos variables”.

- Evitan repetir código.
- Permiten que funciones, clases o interfaces trabajen con cualquier tipo de dato.
- Mantienen la seguridad de tipos sin sacrificar flexibilidad.
- nombres genéricos por convención: T, U, K, V.

function identidad<T>(valor: T): T {
  return valor;
}

let numero = identidad<number>(5);       // T = number
let texto = identidad<string>("hola");   // T = string
let otro = identidad(true); // TypeScript entiende que T es boolean
