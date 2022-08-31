import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hayki } from 'src/app/model/hayki';
import { HaykiService } from 'src/app/service/hayki.service';

@Component({
  selector: 'app-edithayki',
  templateUrl: './edithayki.component.html',
  styleUrls: ['./edithayki.component.css']
})
export class EdithaykiComponent implements OnInit {
  hayki: Hayki = null;

  constructor(
    private haykiS: HaykiService,
    private activatedRouter : ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.haykiS.detail(id).subscribe(
      data => {
        this.hayki = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }
  
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.haykiS.update(id, this.hayki).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la skill");
        this.router.navigate(['']);
      }
    )
  }
}
