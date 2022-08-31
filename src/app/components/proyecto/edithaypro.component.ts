import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Haypro } from 'src/app/model/haypro';
import { HayproService } from 'src/app/service/haypro.service';

@Component({
  selector: 'app-edithaypro',
  templateUrl: './edithaypro.component.html',
  styleUrls: ['./edithaypro.component.css']
})
export class EdithayproComponent implements OnInit {
  haypro: Haypro = null;

  constructor(
    private hayproS: HayproService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.hayproS.detail(id).subscribe(
      data =>{
        this.haypro = data;
      }, err=>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.hayproS.update(id, this.haypro).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error updating proyect");
        this.router.navigate(['']);
      }
    )
  }

}
