import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Icontactos } from 'src/app/models/icontactos';
import { IRadomContact } from 'src/app/models/randomUser.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  token: string | null = null;
  contactoSeleccionado: IRadomContact | undefined;
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
    if (history.state.data) {
      console.log(history.state.data)
      this.contactoSeleccionado = history.state.data

    }


  }

  navegarContactos(): void {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        filter: 'mujer'
      }
    }
    this.router.navigate(['contacts']), navigationExtras;
  }

}
