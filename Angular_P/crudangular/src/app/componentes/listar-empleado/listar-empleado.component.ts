import { Component } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})

export class ListarEmpleadoComponent {
  Empleados:any;

  constructor(
    private crudService: CrudService
    
    ){

      this.crudService.ObtenerEmpleados().subscribe( (respuesta): void => {
          console.log(respuesta); // Hacer algo con la respuesta en caso contrario
          this.Empleados = respuesta;
        
      });

    }
    borrarRegistro(id:any,iControl:any):void {
      console.log(id);
      console.log(iControl);
      if (window.confirm("¿Desea borrar el registro?")) {
        this.crudService.BorrarEmpleado(id).subscribe( (respuesta): void => {
          this.Empleados.splice(iControl,1);
      });

      }

    }

}
