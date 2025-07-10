import type { IProducto, IUsuario } from "../types/types";

export const mockListaUsuarios: IUsuario[] = [
    {
        id: 1,
        nombre: 'alfredo',
        contrasenia: '1234'
    },
    {
        id: 2,
        nombre: 'sergio',
        contrasenia: 'admin'
    },
    {
        id: 3,
        nombre: 'carla',
        contrasenia: 'carla'
    }
];

export const mockListaProductos: IProducto[] = [
    {
        id: 1,
        nombre: 'Goku',
        precio: 15,
        pronocion: true,
        descripcion: 'Figura articulada de Goku con traje de combate clásico',
        categoria: 'Figuras de acción'
    },
    {
        id: 2,
        nombre: 'Vegeta',
        precio: 30,
        pronocion: false,
        descripcion: 'Figura premium de Vegeta con armadura Saiyajin',
        categoria: 'Figuras de colección'
    },
    {
        id: 3,
        nombre: 'Piccolo',
        precio: 35,
        pronocion: true,
        descripcion: 'Figura de Piccolo con capa y detalles del universo Namek',
        categoria: 'Figuras de acción'
    },
    {
        id: 4,
        nombre: 'Bulma',
        precio: 25,
        pronocion: false,
        descripcion: 'Figura de Bulma con look de la saga de Namek',
        categoria: 'Figuras femeninas'
    },
    {
        id: 5,
        nombre: 'Trunks',
        precio: 40,
        pronocion: true,
        descripcion: 'Figura articulada de Trunks con espada y chaqueta Capsule Corp',
        categoria: 'Figuras de colección'
    },
    {
        id: 6,
        nombre: 'Freezer',
        precio: 45,
        pronocion: false,
        descripcion: 'Figura de Freezer en su forma final, incluye base de exhibición',
        categoria: 'Villanos'
    }
];
