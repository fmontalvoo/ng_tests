import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NavBarComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe tener un router link al componente de medicos', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    console.info(debugElements);
    for (const el of debugElements) {
      console.info(el['attributes']);
      const routerLink = el.injector.get(RouterLinkWithHref);
      console.info(routerLink);
      const expected = (el['attributes']['routerLink'] === '/medicos');
      if (expected) {
        expect(expected).toBeTruthy();
        break;
      }
    }
  });
});
