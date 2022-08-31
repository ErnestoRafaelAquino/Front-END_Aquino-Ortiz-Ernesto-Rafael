import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { HaykiComponent } from './components/hayki/hayki.component';
import { NewhaykiComponent } from './components/hayki/newhayki.component';
import { EdithaykiComponent } from './components/hayki/edithayki.component';
import { EditbanerComponent } from './components/acerca-de/editbaner.component';
import { NewhaycaComponent } from './components/habilidades/newhayca.component';
import { EdithaycaComponent } from './components/habilidades/edithayca.component';
import { NewhayproComponent } from './components/proyecto/newhaypro.component';
import { EdithayproComponent } from './components/proyecto/edithaypro.component';
import { NewformacionComponent } from './components/formacion/newformacion.component';
import { EditformacionComponent } from './components/formacion/editformacion.component';
import { NewbanerComponent } from './components/acerca-de/newbaner.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    FormacionComponent,
    HabilidadesComponent,
    HaykiComponent,
    NewhaykiComponent,
    EdithaykiComponent,
    EditbanerComponent,
    NewhaycaComponent,
    EdithaycaComponent,
    NewhayproComponent,
    EdithayproComponent,
    NewformacionComponent,
    EditformacionComponent,
    NewbanerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
