import { isLoggedIn } from "./boolean";

describe('Pruebas con booleans',
    () => {
        it('Debe retornar true', () => {
            const expected = isLoggedIn();
            expect(expected).toBeTruthy();
        });
        // it('', () => { });
    });