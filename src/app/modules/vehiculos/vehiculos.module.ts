import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { VehiculosService } from './services/vehiculos.service';
import { ListaVehiculoComponent } from './components/lista-vehiculo/lista-vehiculo.component';

const components = [ListaVehiculoComponent];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[VehiculosService],
  exports:components
})
export class VehiculosModule { }
