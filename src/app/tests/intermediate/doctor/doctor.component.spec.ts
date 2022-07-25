import { HttpClientModule } from '@angular/common/http';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { DoctorComponent } from "./doctor.component";

import { DoctorService } from './doctor.service';

describe('DoctorComponent',
  () => {
    let component: DoctorComponent;
    let fixture: ComponentFixture<DoctorComponent>;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientModule],
        declarations: [DoctorComponent],
        providers: [DoctorService],
      });

      fixture = TestBed.createComponent(DoctorComponent);
      component = fixture.componentInstance;

    });

    it('Se debe crear el componente', () => {
      expect(component).toBeTruthy();
    });

    it('Se debe llamar al metodo ngOnInit', () => {
      spyOn(component, 'ngOnInit').call(null);
      fixture.detectChanges();
      expect(component.ngOnInit).toHaveBeenCalled();
    });
    
  });