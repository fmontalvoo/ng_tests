import { obtenerLista } from "./array";

describe('Pruebas con arrays',
    () => {
        it('Debe retornar una lista con al menos 3 elementos', () => {
            const expected = obtenerLista();
            expect(expected.length).toBeGreaterThanOrEqual(3);
        });
        it('Debe retornar una lista con los elementos "dos" y "cuatro"', () => {
            const expected = obtenerLista();
            expect(expected).toContain('dos');
            expect(expected).toContain('cuatro');
        });
    });