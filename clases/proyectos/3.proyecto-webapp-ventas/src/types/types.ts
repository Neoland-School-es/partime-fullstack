export interface IUsuario {
    id: number;
    nombre: string;
    contrasenia?: string;
}

export interface IProducto {
    id: number;
    nombre: string;
    precio: number;
    pronocion?: boolean;
    descripcion?: string
    categoria?: string
}