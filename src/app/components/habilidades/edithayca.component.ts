import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hayca } from 'src/app/model/hayca';
import { HaycaService } from 'src/app/service/hayca.service';

@Component({
  selector: 'app-edithayca',
  templateUrl: './edithayca.component.html',
  styleUrls: ['./edithayca.component.css']
})
export class EdithaycaComponent implements OnInit {
  hayca: Hayca = null;
  
  constructor(
    private haycaS: HaycaService,
    private activatedRouter : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.haycaS.detail(id).subscribe(
      data =>{
        this.hayca = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.haycaS.update(id, this.hayca).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar hayca");
        this.router.navigate(['']);
      }
    )
  }
}
