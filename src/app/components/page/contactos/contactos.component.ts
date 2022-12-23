import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Icontactos } from 'src/app/models/icontactos';
import { listaContactos } from 'src/app/service/contactService';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})

export class ContactosComponent implements OnInit {

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