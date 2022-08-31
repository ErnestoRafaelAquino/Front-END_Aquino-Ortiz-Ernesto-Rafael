import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Baner } from 'src/app/model/baner';
import { BanerService } from 'src/app/service/baner.service';

@Component({
  selector: 'app-newbaner',
  templateUrl: './newbaner.component.html',
  styleUrls: ['./newbaner.component.css']
})
export class NewbanerComponent implements OnInit {
  profesionH: string;
  acercaH: string;
  imgH: string;

  constructor(private banerS: BanerService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const baner = new Baner(this.profesionH, this.acercaH, this.imgH);
    this.banerS.save(baner).subscribe(
      data =>{
        alert("data añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}
