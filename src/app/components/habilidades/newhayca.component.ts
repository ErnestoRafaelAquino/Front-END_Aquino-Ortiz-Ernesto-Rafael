import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hayca } from 'src/app/model/hayca';
import { HaycaService } from 'src/app/service/hayca.service';

@Component({
  selector: 'app-newhayca',
  templateUrl: './newhayca.component.html',
  styleUrls: ['./newhayca.component.css']
})
export class NewhaycaComponent implements OnInit {
  tituloH: string;
  textoH: string;
  imgH: string;

  constructor(private haycaS: HaycaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const hayca = new Hayca({ tituloH: this.tituloH, textoH: this.textoH, imgH: this.imgH });
    this.haycaS.save(hayca).subscribe(
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
