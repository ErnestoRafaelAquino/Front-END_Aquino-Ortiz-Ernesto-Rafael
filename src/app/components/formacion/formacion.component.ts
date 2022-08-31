import { Component, OnInit } from '@angular/core';
import { Formacion } from 'src/app/model/formacion';
import { FormacionService } from 'src/app/service/formacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {
  formacion: Formacion[] = [];

  constructor(private formacionS: FormacionService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarFormacion();
    if (this.tokenService.getToken()){
      this.isLogged = true;
      } else {
       this.isLogged = false;
    }
  }

  cargarFormacion(): void {
    this.formacionS.lista().subscribe(
      data =>{
        this.formacion = data;
      }
    )
  }

  delete(id?: number){
    if ( id != undefined){
      this.formacionS.delete(id).subscribe(
        data =>{
          this.cargarFormacion();
        }, err =>{
          alert("no se pudo eliminar");
        }
      )
    }
  }
}
