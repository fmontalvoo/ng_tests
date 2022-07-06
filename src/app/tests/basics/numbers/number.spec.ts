import { increment } from "./number";

describe('Pruebas con numbers',
    () => {
        it('Debe retornar 100 si el numero es mayor a 100', () => {
            const expected = increment(101);
            expect(expected).toBe(100);
        });
        it('Debe retornar el valor del parametro mas 1 si el numero es menor a 100', () => {
            const expected = increment(50);
            expect(expected).toBe(51);
        });
    });