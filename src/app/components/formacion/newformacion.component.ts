import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formacion } from 'src/app/model/formacion';
import { FormacionService } from 'src/app/service/formacion.service';

@Component({
  selector: 'app-newformacion',
  templateUrl: './newformacion.component.html',
  styleUrls: ['./newformacion.component.css']
})
export class NewformacionComponent implements OnInit {
  contenidoM: string;
  imgM: string;

  constructor(private formacionS: FormacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const formacion = new Formacion(this.contenidoM, this.imgM);
    this.formacionS.save(formacion).subscribe(
      data => {
        alert("Formacion añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

}
