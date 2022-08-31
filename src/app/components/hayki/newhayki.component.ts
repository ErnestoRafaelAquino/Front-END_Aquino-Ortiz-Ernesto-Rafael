import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hayki } from 'src/app/model/hayki';
import { HaykiService } from 'src/app/service/hayki.service';

@Component({
  selector: 'app-newhayki',
  templateUrl: './newhayki.component.html',
  styleUrls: ['./newhayki.component.css']
})
export class NewhaykiComponent implements OnInit {
  nombreH: string;
  private _porcentajeH: number;
  public get porcentajeH(): number {
    return this._porcentajeH;
  }
  public set porcentajeH(value: number) {
    this._porcentajeH = value;
  }
  imgH: string;

  constructor(private haykiS: HaykiService, private router: Router) { }
  
  ngOnInit(): void {
  }

  onCreate(): void {
    const hayki = new Hayki({ nombreH: this.nombreH, porcentajeH: this.porcentajeH, imgH: this.imgH });
    this.haykiS.save(hayki).subscribe(
      data => {
        alert("Skill añadida correctamente");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
