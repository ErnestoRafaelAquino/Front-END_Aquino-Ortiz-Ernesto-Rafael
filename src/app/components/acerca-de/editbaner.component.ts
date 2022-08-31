import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Baner } from 'src/app/model/baner';
import { BanerService } from 'src/app/service/baner.service';

@Component({
  selector: 'app-editbaner',
  templateUrl: './editbaner.component.html',
  styleUrls: ['./editbaner.component.css']
})
export class EditbanerComponent implements OnInit {
  baner: Baner = null;
  constructor(
    private banerS: BanerService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.banerS.detail(id).subscribe(
      data =>{
        this.baner = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.banerS.update(id, this.baner).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar el baner");
        this.router.navigate(['']);
      }
    )
  }

}
