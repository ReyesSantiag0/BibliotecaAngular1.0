import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';


import { ConsultarPrestamosComponent } from './componentes/consultar-prestamos/consultar-prestamos.component';
import { ConsultarLibrosComponent } from './componentes/consultar-libros/consultar-libros.component';
import { RegistrarLibroComponent } from './componentes/registrar-libro/registrar-libro.component';
import { EditarLibroComponent } from './componentes/editar-libro/editar-libro.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PrestarLibroComponent } from './componentes/prestar-libro/prestar-libro.component';
import { ResgistroAdminComponent } from './componentes/resgistro-admin/resgistro-admin.component';
import { EditarInformacionLibroComponent } from './componentes/editar-informacion-libro/editar-informacion-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,

    ConsultarPrestamosComponent,
    ConsultarLibrosComponent,
    RegistrarLibroComponent,
    EditarLibroComponent,
    NavbarComponent,
    PrestarLibroComponent,
    ResgistroAdminComponent,
    EditarInformacionLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
