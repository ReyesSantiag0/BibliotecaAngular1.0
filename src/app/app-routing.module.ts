import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./componentes/login/login.component";
import { HomeComponent } from "./componentes/home/home.component";
import { ConsultarLibrosComponent } from "./componentes/consultar-libros/consultar-libros.component";
import { EditarLibroComponent } from "./componentes/editar-libro/editar-libro.component";

import { RegistrarLibroComponent } from "./componentes/registrar-libro/registrar-libro.component";
import { ResgistroAdminComponent } from "./componentes/resgistro-admin/resgistro-admin.component";
import { PrestarLibroComponent } from "./componentes/prestar-libro/prestar-libro.component";
import { ConsultarPrestamosComponent } from "./componentes/consultar-prestamos/consultar-prestamos.component";
import { EditarInformacionLibroComponent } from "./componentes/editar-informacion-libro/editar-informacion-libro.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "consultarlibros", component: ConsultarLibrosComponent },
  { path: "editarlibro", component: EditarLibroComponent },
  { path: "registrarlibro", component: RegistrarLibroComponent },
  { path: "registroAdmin", component: ResgistroAdminComponent },
  { path: "prestarlibro", component: PrestarLibroComponent },
  { path: "consultaprestamo", component: ConsultarPrestamosComponent },
  {
    path: "editarinformacionlibro",
    component: EditarInformacionLibroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
