import { Component, OnInit } from '@angular/core';
import { IRadomContact, Results } from 'src/app/models/randomUser.interface';
import { RandomUserService } from 'src/app/service/random-user.service';

@Component({
  selector: 'app-random-contact',
  templateUrl: './random-contact.component.html',
  styleUrls: ['./random-contact.component.css']
})
export class RandomContactComponent implements OnInit{
 Contact: IRadomContact | undefined;
  constructor(private randomService: RandomUserService){}
  ngOnInit(): void {
    this.randomService.obtenerUsuarioAleatorio().subscribe((response: Results) => {
      this.Contact = response.results[0];
      console.table(this.Contact.name)
    })
  }

  obtenerNuevoContacto(){
    this.randomService.obtenerUsuarioAleatorio().subscribe((response: Results) => {
      this.Contact = response.results[0];
      console.table(this.Contact.name)
    })
  }

}
