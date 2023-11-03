import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../../services/vehiculos.service';
import { Vehiculo } from 'src/app/models/vehiculo.model';

@Component({
  selector: 'app-lista-vehiculo',
  templateUrl: './lista-vehiculo.component.html',
  styleUrls: ['./lista-vehiculo.component.css']
})
export class ListaVehiculoComponent implements OnInit {

  listaVehiculos: Array<Vehiculo> = [];

  constructor(private vehiculoService: VehiculosService) { }

  obtenerVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe(response => {
      this.listaVehiculos = response;
    });
  }

  ngOnInit(): void {
    this.obtenerVehiculos();
  }
}
