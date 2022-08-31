import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Haypro } from 'src/app/model/haypro';
import { HayproService } from 'src/app/service/haypro.service';

@Component({
  selector: 'app-newhaypro',
  templateUrl: './newhaypro.component.html',
  styleUrls: ['./newhaypro.component.css']
})
export class NewhayproComponent implements OnInit {
  tituloH: string;
  textoH: string;
  linkH: string;
  imgH: string;

  constructor(private hayproS: HayproService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const haypro = new Haypro(this.tituloH, this.textoH, this.linkH, this.imgH);
    this.hayproS.save(haypro).subscribe(
      data => {
        alert("Poyecto añadida");
        this.router.navigate(['']);
      }, err =>{
        alert("fallo");
        this.router.navigate(['']);
      }
    )
  }

}
