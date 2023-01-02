import { Pipe, PipeTransform } from '@angular/core';
import { Icontactos } from '../models/icontactos';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {
transform(contacto: Icontactos, ...args: unknown[]): unknown {
   return `${contacto.nombre} ${contacto.apellido}`
  }

}
