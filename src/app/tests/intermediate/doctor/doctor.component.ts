import { Component, OnInit } from '@angular/core';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styles: [
  ]
})
export class DoctorComponent implements OnInit {

  public doctores: any[] = [];

  constructor(private ds: DoctorService) { }

  ngOnInit(): void {
    console.log('DoctorComponent:> ngOnInit');
    this.obtenerDoctores();
  }

  private obtenerDoctores() {
    this.ds.getDoctores().subscribe({
      next: (data: any) => {
        console.log('DATA:> '+data);
        this.doctores = data;
      },
      error: err => console.error(err),
      complete: () => console.log('Completado')
    });
  }

}
