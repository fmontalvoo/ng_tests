import { FormBuilder } from "@angular/forms";

import { FormRegister } from "./form";

describe('Pruebas con formularios',
    () => {
        let component: FormRegister;

        beforeEach(() => component = new FormRegister(new FormBuilder()));

        it('Debe crear un formulario con dos inputs', () => {
            const expected = component.form.contains('email') && component.form.contains('password');
            expect(expected).toBeTruthy();
        });
        it('El email debe ser obligatorio', () => {
            const control = component.form.get('email');
            control!.setValue('');
            const expected = control!.valid;
            expect(expected).toBeFalsy();
        });
        it('El email debe tener un formato valido', () => {
            const control = component.form.get('email');
            control!.setValue('fgmo@gmail.com');
            const expected = control!.valid;
            expect(expected).toBeTruthy();
        });
        // it('', () => { });
    });