import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-router-medico',
  templateUrl: './router-medico.component.html',
  styles: [
  ]
})
export class RouterMedicoComponent implements OnInit {

  public id: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      console.info('RouterMedicoComponent.ngOnInit', params, this.id);
    });
  }

  public guardarDoctor() {
    this.router.navigate(['/doctor', 2]);
  }

}
