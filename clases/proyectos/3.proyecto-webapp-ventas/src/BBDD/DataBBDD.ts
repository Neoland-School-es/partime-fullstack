import type { Producto, Usuario } from "../types/types";

export const datoLocalListaUsuarios: Usuario[] = [
    {
        id: 1,
        nombre: 'alfredo',
        contrasenia: '1234',
        productosID: [1, 3],
    },
    {
        id: 2,
        nombre: 'sergio',
        contrasenia: '1111',
        productosID: [2, 3, 1],
    },
    {
        id: 3,
        nombre: 'carla',
        contrasenia: 'carla',
        productosID: [2],
    }
];

export const datoLocalListaProductos: Producto[] = [
    {
        id: 1,
        nombre: 'Goku',
        precio: 15,
    },
    {
        id: 2,
        nombre: 'Vegeta',
        precio: 30,
    },
    {
        id: 3,
        nombre: 'Piccolo',
        precio: 35,
    }
];