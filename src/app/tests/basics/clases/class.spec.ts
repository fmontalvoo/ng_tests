import { NPC } from "./class";

describe('Pruebas con clases',
    () => {
        // beforeEach(() => console.log('Antes de cada prueba.'));
        // afterEach(() => console.log('Después de cada prueba.'));
        // beforeAll(() => console.log('Antes de todas las pruebas.'));
        // afterAll(() => console.log('Después de todas las pruebas.'));

        let personaje = new NPC('Personaje');
        beforeEach(() => {
            personaje.setHP(100);
            // personaje = new NPC('Personaje');
        });

        it('Debe retornar un HP de 80 si recibe 20 de daño', () => {
            const expected = personaje.getHurt(20);
            expect(expected).toBe(80);
        });
        it('Debe retornar un HP de 50 si recibe 50 de daño', () => {
            const expected = personaje.getHurt(50);
            expect(expected).toBe(50);
        });
        it('Debe retornar un HP de 0 si recibe un daño de 100 o mas', () => {
            const expected = personaje.getHurt(500);
            expect(expected).toBe(0);
        });
        xit('Debe retornar el HP actual del npc', () => {
            const expected = personaje.getHP();
            expect(expected).toBe(100);
        });
    });