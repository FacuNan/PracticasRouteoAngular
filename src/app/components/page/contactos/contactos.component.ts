import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Icontactos } from 'src/app/models/icontactos';
import { ContactsService } from 'src/app/service/contacts.service';


@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})

export class ContactosComponent implements OnInit {
  filtroSexo: string = 'todos'
  listaContactos: Icontactos[] = [];
  constructor(private router: Router, private activateRoute: ActivatedRoute, private contactsService: ContactsService) { }
  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe((params: any) => {
      if (params.sexo) {
        console.log(params.sexo)
        this.filtroSexo = params.sexo
      }

      this.contactsService.obtenerContactos(this.filtroSexo)?.then((lista) => this.listaContactos = lista
    
      )
      
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