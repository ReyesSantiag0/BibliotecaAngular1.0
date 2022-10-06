import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { ConsultarLibrosComponent } from './componentes/consultar-libros/consultar-libros.component';
import { EditarLibroComponent } from './componentes/editar-libro/editar-libro.component';

import { RegistrarLibroComponent } from './componentes/registrar-libro/registrar-libro.component';


const routes: Routes = [
  {path: '',component:LoginComponent},
  {path: 'home',component:HomeComponent},
  {path: 'consultarlibros',component:ConsultarLibrosComponent},
  {path: 'editarlibro',component:EditarLibroComponent},
  {path: 'registrarlibro',component:RegistrarLibroComponent},
    
   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
