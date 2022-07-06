import { message } from "./string";

describe('Pruebas con strings',
    () => {
        it('Debe retornar un string', () => {
            const expected = message('Frank');
            expect(typeof expected).toBe('string');
        });
        it('Debe retornar un mensaje con el nombre del parametro', () => {
            const name = 'Frank';
            const expected = message(name);
            expect(expected).toContain(name);
        });
    });