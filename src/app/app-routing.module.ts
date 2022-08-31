import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditbanerComponent } from './components/acerca-de/editbaner.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditformacionComponent } from './components/formacion/editformacion.component';
import { NewformacionComponent } from './components/formacion/newformacion.component';
import { EdithaycaComponent } from './components/habilidades/edithayca.component';
import { NewhaycaComponent } from './components/habilidades/newhayca.component';
import { EdithaykiComponent } from './components/hayki/edithayki.component';
import { NewhaykiComponent } from './components/hayki/newhayki.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EdithayproComponent } from './components/proyecto/edithaypro.component';
import { NewhayproComponent } from './components/proyecto/newhaypro.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NeweducacionComponent},
  { path: 'editedu/:id', component: EditeducacionComponent},
  { path: 'nuevaskill', component: NewhaykiComponent},
  { path: 'editskill/:id', component: EdithaykiComponent},
  { path: 'editbaner/:id', component: EditbanerComponent},
  { path: 'nuevahayca', component: NewhaycaComponent},
  { path: 'edithayca/:id', component: EdithaycaComponent},
  { path: 'nuevahaypro', component: NewhayproComponent},
  { path: 'edithaypro/:id', component: EdithayproComponent},
  { path: 'nuevaformacion', component: NewformacionComponent},
  { path: 'editformacion/:id', component: EditformacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
