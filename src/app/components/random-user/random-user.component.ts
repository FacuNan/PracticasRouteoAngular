import { Component, Input, OnInit } from '@angular/core';
import { IRadomContact, Results } from 'src/app/models/randomUser.interface';


@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css']
})
export class RandomUserComponent implements OnInit {

  randomResults: Results | undefined;
  @Input() randomContact: IRadomContact | undefined;

  constructor() { }
  ngOnInit(): void{
   
  }

}
