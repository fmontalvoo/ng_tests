import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [IncrementadorComponent],
            imports: [FormsModule]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe mostrar la leyenda', () => {
        component.leyenda = 'Progreso de carga';
        const ref = By.css('h3'); // Devuelve la referencia del elemento h3.
        const el: HTMLElement = fixture.debugElement.query(ref).nativeElement;
        fixture.detectChanges(); // Deteccion de cambios en el componente.
        expect(el.innerHTML).toContain('Progreso de carga');
    });

    it('1) Debe mostrar en el input el valor del progreso', async () => {
        component.cambiarValor(5);
        fixture.detectChanges(); // Deteccion de cambios en el componente.
        const res = await fixture.whenStable(); // Espera a que el cambio de valor se haya realizado.
        const input: HTMLElement = fixture.debugElement.query(By.css('input')).nativeElement;
        const expected = (input as HTMLInputElement).value;
        console.info(res, input, expected);
        expect(expected).toBe('55');
    });

    it('2) Debe mostrar en el input el valor del progreso', waitForAsync(() => {
        component.cambiarValor(5);
        fixture.detectChanges(); // Deteccion de cambios en el componente.
        fixture.whenStable().then(res => {
            const input: HTMLElement = fixture.debugElement.query(By.css('input')).nativeElement;
            const expected = (input as HTMLInputElement).value;
            console.info(res, input, expected);
            expect(expected).toBe('55');
        });
    }));

    it('Debe incrementar/decrementar en 5, con un click en el botón', () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        console.info(botones);
        botones[0].triggerEventHandler('click', null); // Click en el botón de decrementar.
        expect(component.progreso).toBe(45);
        botones[1].triggerEventHandler('click', null); // Click en el botón de incrementar.
        expect(component.progreso).toBe(50);
    });

    it('El titulo del componente debe mostrar el valor del progreso', () => {
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        botones[0].triggerEventHandler('click', null);
        fixture.detectChanges();
        const el: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
        expect(el.innerHTML).toContain('45');
    });

});
