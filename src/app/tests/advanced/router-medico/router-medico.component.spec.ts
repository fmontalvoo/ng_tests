import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { RouterMedicoComponent } from './router-medico.component';

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute },
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe redireccionar a Doctor al guardar', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');

    component.guardarDoctor();
    expect(spy).toHaveBeenCalledWith(['/doctor', 2]);
  });

  it('Debe asignar el valor 3 al id', () => {
    const activatedRoute: FakeActivatedRoute = TestBed.inject(ActivatedRoute);
    expect(component.id).toBe('3');
  });

});


class FakeRouter {
  navigate(...args: any[]) {
    return args;
  }
}

class FakeActivatedRoute {
  public params = {
    subscribe(next: (value: Params) => void) {
      next({ id: '3' });
    }
  }
  // public params: Observable<any> = of({ id: '3' });
}