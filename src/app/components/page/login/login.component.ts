import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(): void {

    let token = sessionStorage.getItem('token')

    if (token) {
      this.router.navigate(['home'])
      this.router.navigate(['contacts']);
    }

  }

  loginUser() {
    sessionStorage.setItem('token', '1234578');
    this.router.navigate(['home'])
  }

}
