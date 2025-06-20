import {
    obtenerTodosLosProductosBBDD,
    crearProductoBBDD,
    actualizarProductoBBDD,
    eliminarProductoBBDD
} from '../src/models/productos.model';
import type { IProducto } from './../src/types/types';

describe('ejecucion test productos', () => {
    test('obtenerTodosLosProductosBBDD retorna array vacío si no hay datos locales', () => {
        const productos = obtenerTodosLosProductosBBDD();
        expect(Array.isArray(productos)).toBe(true);
    });

    test('crearProductoBBDD crea un nuevo producto correctamente', () => {
        const lista: IProducto[] = [];
        const nuevaLista = crearProductoBBDD(lista, 'Mate', 150);
        expect(nuevaLista?.length).toBe(1);
        expect(nuevaLista?.[0].nombre).toBe('Mate');
    });

    test('crearProductoBBDD falla si nombre es vacío', () => {
        const lista: IProducto[] = [];
        expect(() => crearProductoBBDD(lista, '', 150)).toThrow('Error al crear producto.');
    });

    test('actualizarProductoBBDD actualiza un producto correctamente', () => {
        const lista: IProducto[] = [{ id: 1, nombre: 'Azúcar', precio: 100 }];
        const actualizada = actualizarProductoBBDD(lista, 1, 'Stevia', 120);
        expect(actualizada?.[0].nombre).toBe('Stevia');
        expect(actualizada?.[0].precio).toBe(120);
    });

    test('actualizarProductoBBDD falla si el producto no existe', () => {
        const lista: IProducto[] = [];
        expect(() => actualizarProductoBBDD(lista, 99, 'Yerba', 250)).toThrow('Elemento no encontrado');
    });

    test('eliminarProductoBBDD elimina un producto correctamente', () => {
        const lista: IProducto[] = [{ id: 1, nombre: 'Pan', precio: 80 }];
        const nuevaLista = eliminarProductoBBDD(lista, 1);
        expect(nuevaLista?.length).toBe(0);
    });

    test('eliminarProductoBBDD falla si no encuentra el producto', () => {
        const lista: IProducto[] = [{ id: 1, nombre: 'Pan', precio: 80 }];
        expect(() => eliminarProductoBBDD(lista, 99)).toThrow('Producto no encontrado');
    });
});
