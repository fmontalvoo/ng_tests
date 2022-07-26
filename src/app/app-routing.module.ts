import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DoctorComponent } from './tests/intermediate/doctor/doctor.component';
import { MedicosComponent } from './tests/intermediate/espias/medicos.component';
import { HospitalComponent } from './tests/intermediate/hospital/hospital.component';

const routes: Routes = [
  {
    path: 'hospital',
    component: HospitalComponent
  },
  {
    path: 'medicos',
    component: MedicosComponent
  },
  {
    path: 'doctor/:id',
    component: DoctorComponent
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
