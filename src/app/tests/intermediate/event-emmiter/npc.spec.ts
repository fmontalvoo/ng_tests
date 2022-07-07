import { NPC } from "./npc";

describe('Pruebas con emmitters',
    () => {
        let npc: NPC;
        beforeEach(() => npc = new NPC('Personaje'));

        it('Debería emitir un evento cuando se recibe daño', () => {
            let expected = 0;
            npc.hpChanged.subscribe(hp => expected = hp);
            npc.getHurt(1000);
            expect(expected).toBe(0);
        });
        it('Debe emitir un event cuando se recibe daño y sobrevivir si es menor a 100', () => {
            let expected = 0;
            npc.hpChanged.subscribe(hp => expected = hp);
            npc.getHurt(70);
            expect(expected).toBe(30);
        });
    });