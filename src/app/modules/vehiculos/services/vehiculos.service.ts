import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from 'src/app/models/vehiculo.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  constructor(private http: HttpClient) { }

  getVehiculos(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(environment.apiUrl);
  }

}
