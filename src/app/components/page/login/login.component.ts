import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 
  constructor(private router: Router, private authService:AuthService) { }
  
  ngOnInit(): void {

    let token = sessionStorage.getItem('token')

    if (token) {
      this.router.navigate(['home'])
      this.router.navigate(['contacts']);
    }

  }
 
  loginUser(value: any) {
    let{email, password}= value;
    this.authService.login(email, password).subscribe((response)=>{
      this.router.navigate(['contacts'])
      if(response.token){
        sessionStorage.setItem('token', response.token)
      }
    })
 
  }

}
