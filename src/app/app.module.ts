import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MedicosComponent } from './tests/intermediate/espias/medicos.component';
import { DoctorComponent } from './tests/intermediate/doctor/doctor.component';
import { HospitalComponent } from './tests/intermediate/hospital/hospital.component';
import { IncrementadorComponent } from './tests/intermediate/incrementador/incrementador.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    MedicosComponent,
    DoctorComponent,
    HospitalComponent,
    IncrementadorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
