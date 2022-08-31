import { Component, OnInit } from '@angular/core';
import { Hayki } from 'src/app/model/hayki';
import { HaykiService } from 'src/app/service/hayki.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hayki',
  templateUrl: './hayki.component.html',
  styleUrls: ['./hayki.component.css'],
})
export class HaykiComponent implements OnInit {
  hayki: Hayki[] = [];

  constructor(
    private haykiS: HaykiService,
    private tokenService: TokenService
  ) {}
  isLogged = false;

  ngOnInit(): void {
    this.cargarHayki();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarHayki(): void {
    this.haykiS.lista().subscribe((data) => {
      this.hayki = data;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.haykiS.delete(id).subscribe(
        (data) => {
          this.cargarHayki();
        },
        (err) => {
          alert('No se pudo eliminar');
        }
      );
    }
  }
}
