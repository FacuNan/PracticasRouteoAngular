import { Component, Input, OnInit } from '@angular/core';
import { IRadomContact, Results } from 'src/app/models/randomUser.interface';
import { RandomUserService } from 'src/app/service/random-user.service';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css']
})
export class RandomUserComponent implements OnInit {

  randomResults: Results | undefined;
  @Input() randomContact: IRadomContact | undefined;

  constructor(private randomService: RandomUserService) { }
  ngOnInit(): void{
    this.randomService.obtenerUsuarioAleatorio().subscribe((response: Results) => {
      this.randomContact = response.results[0];
      console.table(this.randomContact.name)
    })
  }

}
