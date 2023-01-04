import { Pipe, PipeTransform } from '@angular/core';

import { IRadomContact } from '../models/randomUser.interface';

@Pipe({
  name: 'nombreCompleto'
})
export class PipePipe implements PipeTransform {
transform(contacto: IRadomContact, ...args: unknown[]): unknown {
   return ` ${ contacto.name.title} ${contacto.name.first} ${contacto.name.last}`
  }

}
