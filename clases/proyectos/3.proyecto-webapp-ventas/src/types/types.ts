export interface IUsuario {
    id: number;
    nombre: string;
    contrasenia?: string;
    productosID?: IProducto["id"][];
}

export interface IProducto {
    id: number;
    nombre: string;
    precio: number;
}