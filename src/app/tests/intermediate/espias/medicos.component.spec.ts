import { EMPTY, from, of, throwError } from 'rxjs';

import { MedicosService } from './medicos.service';
import { MedicosComponent } from './medicos.component';

describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio: MedicosService = new MedicosService(null);

    beforeEach(() => {
        componente = new MedicosComponent(servicio);
    });

    it('OnInit: Debe cargar el listado de medicos', () => {
        spyOn(servicio, 'getMedicos').and.callFake(() => {
            return of(['medico1', 'medico2']);
            // return from([['medico1', 'medico2']]);
        });

        componente.ngOnInit();

        const expected = componente.medicos.length > 0;

        expect(expected).toBeGreaterThan(0);
    });

    it('Debe llamar al servicio para agregar medicos', () => {
        const spy = spyOn(servicio, 'agregarMedico')
            .and.callFake(() => EMPTY);

        componente.agregarMedico();

        expect(spy).toHaveBeenCalled();
    });

    it('Debe agregar un nuevo medico al listado', () => {
        const medico = { id: 7, nombre: 'Medico Alan Brito' };

        spyOn(servicio, 'agregarMedico')
            .and.returnValue(of(medico));

        componente.agregarMedico();

        const expected = componente.medicos.indexOf(medico);

        expect(expected).toBeGreaterThanOrEqual(0);
    });

    it('Si falla la adicion, la propiedad mensajeError debe ser igual al error del servicio', () => {
        const error = 'No se pudo agregar el médico';

        spyOn(servicio, 'agregarMedico')
            .and.returnValue(throwError(() => new Error(error)));

        componente.agregarMedico();

        const expected = componente.mensajeError.toString();

        expect(expected).toContain(error);
    });

    it('Debe llamar al servicio para eliminar un medico', () => {
        const spy = spyOn(servicio, 'borrarMedico')
            .and.callFake(() => EMPTY);

        spyOn(window, 'confirm').and.returnValue(true);

        componente.borrarMedico('1');

        expect(spy).toHaveBeenCalledWith('1');
    });

});
