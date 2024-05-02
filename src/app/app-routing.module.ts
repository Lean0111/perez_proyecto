import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/page/inicio/inicio.component';

//son las encargadas de tener todas las rutas de la pagina
const routes: Routes = [
  //ruta comun -> 1 solo componente
  {
    path:"", component:InicioComponent
  },

  // ruta perezosa -> 1 módulo
  // loadChildren: indica una ruta hija
  // ()=>import: ruta de donde viene el modulo
  // .then: promesa/ funciona asincronica
  {
    path:"", loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
