import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVehiculoComponent } from './lista-vehiculo.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Vehiculo } from 'src/app/models/vehiculo.model';
import { faker } from '@faker-js/faker';

describe('ListaVehiculoComponent', () => {
  let component: ListaVehiculoComponent;
  let fixture: ComponentFixture<ListaVehiculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaVehiculoComponent],
      imports:[HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(ListaVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be have thead element', () =>{
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('thead').length).toEqual(1);
  });

  it('should be render the same rows by each dummy record', () =>{
    const dummyData = generarVehiculosDummy();
    component.listaVehiculos = dummyData;
    fixture.detectChanges();   
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('tbody tr').length).toEqual(dummyData.length);
  });
});

export function generarVehiculosDummy():Array<Vehiculo>{
  let vehiculosDummy: Array<Vehiculo> = [];
  for(let i = 0; i < 3; i++) {
    const vehiculo = new Vehiculo(
      faker.number.int(),
      faker.vehicle.manufacturer(),
      faker.vehicle.model(),
      faker.vehicle.vehicle(),
      faker.number.int({ min: 1990, max: 2024 }),
      faker.number.int({ min: 1, max: 99999 }),
      faker.vehicle.color(),
      faker.image.url()
    );
    vehiculosDummy.push(vehiculo);
  }
  return vehiculosDummy;
}