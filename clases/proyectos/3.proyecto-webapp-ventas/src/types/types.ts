export interface Usuario {
    id: number;
    nombre: string;
    contrasenia?: string;
    productosID?: Producto["id"][];
}

export interface Producto {
    id: number;
    nombre: string;
    precio: number;
}