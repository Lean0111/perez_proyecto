import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Importaciones de las vistas de los modulos
import { BotellaComponent } from './page/botella/botella.component';
import { CigarrosComponent } from './page/cigarros/cigarros.component';
import { LentesComponent } from './page/lentes/lentes.component';
import { ProductoComponent } from './page/producto/producto.component';

const routes: Routes = [
  {
    path:"producto",component:ProductoComponent
  },
  {
    path:"botella",component:BotellaComponent
  },
  {
    path:"lentes",component:LentesComponent
  },
  {
    path:"cigarros",component:CigarrosComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
