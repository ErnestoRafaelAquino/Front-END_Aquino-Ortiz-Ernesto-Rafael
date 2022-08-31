import { Component, OnInit } from '@angular/core';
import { Haypro } from 'src/app/model/haypro';
import { HayproService } from 'src/app/service/haypro.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  haypro: Haypro[] = [];

  constructor(private hayproS: HayproService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarHaypro();
    if (this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarHaypro(): void {
    this.hayproS.lista().subscribe(
      data =>{
        this.haypro = data;
      }
    )
  }

  delete( id?: number ){
    if( id != undefined){
      this.hayproS.delete(id).subscribe(
        data =>{
          this.cargarHaypro();
        }, err => {
          alert("Error al borrar");
        }
      )
    }
  }
}
