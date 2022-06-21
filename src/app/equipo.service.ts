import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[] = [
    {
      nombre: 'Laura',
      especialidad: 'HTML',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi aut accusamus dolor, eum distinctio possimus amet, in inventore molestiae labore unde quos, dolorem perspiciatis quibusdam reprehenderit velit sequi eius. Laborum.'
    },
    {
      nombre: 'Maria',
      especialidad: 'CSS',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi aut accusamus dolor, eum distinctio possimus amet, in inventore molestiae labore unde quos, dolorem perspiciatis quibusdam reprehenderit velit sequi eius. Laborum.'
    }
  ]
  constructor() {
    console.log('funcionando servicio')
  }

  obtenerEquipo(){
    return this.equipo;
  }


}
