import { Component, OnInit } from '@angular/core';
import { Hayca } from 'src/app/model/hayca';
import { HaycaService } from 'src/app/service/hayca.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
})
export class HabilidadesComponent implements OnInit {
  hayca: Hayca[] = [];

  constructor(
    private haycaS: HaycaService,
    private tokenService: TokenService
  ) {}
  isLogged = false;

  ngOnInit(): void {
    this.cargarHayca();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarHayca(): void {
    this.haycaS.lista().subscribe((data) => {
      this.hayca = data;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.haycaS.delete(id).subscribe(
        (data) => {
          this.cargarHayca();
        },
        (err) => {
          alert('Error no se pudo eliminar');
        }
      );
    }
  }
}
