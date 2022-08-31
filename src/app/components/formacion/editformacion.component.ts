import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formacion } from 'src/app/model/formacion';
import { FormacionService } from 'src/app/service/formacion.service';

@Component({
  selector: 'app-editformacion',
  templateUrl: './editformacion.component.html',
  styleUrls: ['./editformacion.component.css']
})
export class EditformacionComponent implements OnInit {
  formacion: Formacion = null;

  constructor(
    private formacionS: FormacionService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.formacionS.detail(id).subscribe(
      data =>{
        this.formacion = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.formacionS.update(id, this.formacion).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar formacion");
        this.router.navigate(['']);
      }
    )
  }

}
