import { Component, OnInit } from '@angular/core';
import { Baner } from 'src/app/model/baner';
import { persona } from 'src/app/model/persona.model';
import { BanerService } from 'src/app/service/baner.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: persona = new persona("","","");
  baner: Baner[] = [];
  
  constructor(public personaService: PersonaService, private banerS: BanerService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(...args: []): void {
    this.cargarBaner();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarBaner(): void{
    this.banerS.lista().subscribe(
      data =>{
        this.baner = data;
      }
    )
  }
  
  delete(id?: number){
    if( id != undefined){
      this.banerS.delete(id).subscribe(
        data => {
          this.cargarBaner();
        }, err => {
          alert("No se pudo eliminar");
        }
      )
    }
  }
  
}
