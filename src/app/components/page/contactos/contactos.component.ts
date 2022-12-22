import { Component } from '@angular/core';
import { Icontactos } from 'src/app/models/icontactos';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})

export class ContactosComponent {
  listaContactos: Icontactos[]=[
    {
      id:0,
      nombre:'Facundo',
      apellido:'Comercio',
      email:'facundo@Alura'
      
    },

    {
      id:1,
      nombre:'Nancy',
      apellido:'Echeveria',
      email:'Nancy@Alura'
      
    }
  ]

}
