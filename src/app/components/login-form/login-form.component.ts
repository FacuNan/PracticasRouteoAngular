import { outputAst } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{
@Output() loginAction:EventEmitter<{}> = new EventEmitter<{}>();
  loginForm: FormGroup= new FormGroup({});
  constructor(private formBuilder: FormBuilder, private authService: AuthService){}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['' ,[Validators.required, Validators.email]],
      password:['', [Validators.required]]
    })

  }

  get Email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }

  submitLogin(){
    if(this.loginForm.valid){
      //this.loginForm.reset();
      this.loginAction.emit(this.loginForm.value);
      

    }
  }

}
