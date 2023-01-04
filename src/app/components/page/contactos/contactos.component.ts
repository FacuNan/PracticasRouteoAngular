import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Icontactos } from 'src/app/models/icontactos';
import { IRadomContact, Results } from 'src/app/models/randomUser.interface';
import { ContactsService } from 'src/app/service/contacts.service';
import { RandomUserService } from 'src/app/service/random-user.service';


@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})

export class ContactosComponent implements OnInit {
  filtroSexo: string = 'todos'

  listaRandom: IRadomContact[] = [];

  constructor(private router: Router, private activateRoute: ActivatedRoute, private contactosService: ContactsService, private randomService: RandomUserService) { }
  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe((params: any) => {
      console.log(params)
      if (params.sexo) {
        this.filtroSexo = params.sexo
        if(params.sexo === 'female' || params.sexo === 'male'){
         
          this.randomService.obtenerRandomContacts(10, params.sexo).subscribe({
            next: (response: Results) => {
              response.results.forEach((contact: IRadomContact, index: number) => {
                this.listaRandom.push(contact)
              })
              console.log(this.listaRandom)
            },
            error: (error) => console.error(`${error}`),
            complete: () => console.info('peticion completada')
          })
    
        }else{
          this.randomService.obtenerRandomContacts(10).subscribe({
            next: (response: Results) => {
              response.results.forEach((contact: IRadomContact, index: number) => {
                this.listaRandom.push(contact)
              })
              console.log(this.listaRandom)
            },
            error: (error) => console.error(`${error}`),
            complete: () => console.info('peticion completada')
          })
    
        }
        
      }

      
      this.randomService.obtenerRandomContacts(10).subscribe({
        next: (response: Results) => {
          response.results.forEach((contact: IRadomContact, index: number) => {
            this.listaRandom.push(contact)
          })
          console.log(this.listaRandom)
        },
        error: (error) => console.error(`${error}`),
        complete: () => console.info('peticion completada')
      })

    })

  }
  volverHome(contacto: IRadomContact) {
    let navigatorExtras: NavigationExtras = {
      state: {
        data: contacto
      }

    }
    this.router.navigate(['/home'], navigatorExtras)
  }
}