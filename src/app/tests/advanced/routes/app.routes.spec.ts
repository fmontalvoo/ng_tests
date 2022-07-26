import { Router, Routes } from "@angular/router";
import { Location } from '@angular/common';
import { fakeAsync, TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";

import { MedicosService } from "../../intermediate/espias/medicos.service";

import { MedicosComponent } from "../../intermediate/espias/medicos.component";
import { HospitalComponent } from "../../intermediate/hospital/hospital.component";
import { DoctorComponent } from "../../intermediate/doctor/doctor.component";

describe('App Routes',
    () => {

        let location: Location;
        let router: Router;

        beforeEach(() => {
            const routes: Routes = [
                {
                    path: 'medicos',
                    component: MedicosComponent
                },
                {
                    path: 'doctor/:id',
                    component: DoctorComponent
                },
                {
                    path: 'hospital',
                    component: HospitalComponent
                },
                {
                    path: '',
                    pathMatch: 'full',
                    redirectTo: 'hospital'
                },
                {
                    path: '**',
                    pathMatch: 'full',
                    redirectTo: 'medicos'
                }
            ];

            TestBed.configureTestingModule({
                imports: [
                    HttpClientModule,
                    RouterTestingModule.withRoutes(routes)
                ],
                declarations: [
                    MedicosComponent,
                    HospitalComponent
                ],
                providers: [
                    MedicosService,
                ]
            }).compileComponents();

            router = TestBed.inject(Router);
            location = TestBed.inject(Location);

            router.initialNavigation();
        });


        it('Debe de redireccionar a hospital por defecto',
            fakeAsync(() => {
                router.navigateByUrl('').then(() => {
                    console.log(location);
                    expect(location.path()).toBe('/hospital');
                });
            })
        );

        it('Debe de redireccionar a doctor con id: 1',
            fakeAsync(() => {
                router.navigate(['/doctor', 1]).then(() => {
                    expect(location.path()).toBe('/doctor/1');
                });
            })
        );

    });