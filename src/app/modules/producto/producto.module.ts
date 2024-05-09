import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './page/producto/producto.component';
import { BotellaComponent } from './page/botella/botella.component';
import { LentesComponent } from './page/lentes/lentes.component';
import { CigarrosComponent } from './page/cigarros/cigarros.component';



@NgModule({
  declarations: [
    ProductoComponent,
    BotellaComponent,
    LentesComponent,
    CigarrosComponent
  
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  exports: [
    ProductoComponent,
    BotellaComponent,
    LentesComponent,
    CigarrosComponent
  ]
})
export class ProductoModule { }
