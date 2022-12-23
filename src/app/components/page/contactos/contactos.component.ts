import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Icontactos } from 'src/app/models/icontactos';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})

export class ContactosComponent implements OnInit {
  listaContactos: Icontactos[] = [
    {
      id: 0,
      nombre: 'Facundo',
      apellido: 'Comercio',
      email: 'facundo@Alura',
      sexo: 'hombre'

    },

    {
      id: 1,
      nombre: 'Nancy',
      apellido: 'Echeveria',
      email: 'Nancy@Alura',
      sexo: 'mujer'

    }
  ]
  constructor(private router: Router, private activateRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe((params:any)=>{
      console.log(params.sexo)
    })
  }
  volverHome(contacto: Icontactos) {
    let navigatorExtras: NavigationExtras = {
      state: {
        data: contacto
      }

    }
    this.router.navigate(['/home'], navigatorExtras)
  }
}