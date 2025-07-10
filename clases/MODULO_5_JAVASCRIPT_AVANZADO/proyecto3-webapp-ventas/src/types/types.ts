export interface IUsuario {
    id: number;
    nombre: string;
    contrasenia?: string;
}

export interface IProducto {
    id: number;
    nombre: string;
    imagen?: string | null;
    precio: number;
    pronocion?: boolean;
    descripcion?: string
    categoria?: string
}