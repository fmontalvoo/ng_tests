import { IncrementadorComponent } from "./incrementador.component";

describe('Incremendator Component Unit Tests', () => {
    let component: IncrementadorComponent;
    beforeEach(() => component = new IncrementadorComponent())
    it('El valor del progreso no debe pasar de 100', () => {
        component.cambiarValor(55);
        expect(component.progreso).toBeGreaterThanOrEqual(100);
    });
});