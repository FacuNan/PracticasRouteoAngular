import { Injectable } from '@angular/core';
import { Icontactos } from '../models/icontactos';
import { listaContactos } from '../mosks/contactService';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  listaContacts: Icontactos[] = listaContactos;
  constructor() { }
  obtenerContactos(sexo?: string): Promise<Icontactos[]> | undefined {
    if (sexo) {
      let listaFiltrada: Icontactos[] = this.listaContacts.filter((contacto) =>
        contacto.sexo == sexo)
      return Promise.resolve(listaFiltrada)
    } else if (sexo == 'todos') {
      return Promise.resolve(this.listaContacts)
    } else {
      return Promise.reject('Ha ocurrido un error');
    }
  }
}
