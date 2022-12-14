import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm=this.fb.group({
    email:["",Validators.required],
    password:['',Validators.required]
  })

  constructor(
    private fb:FormBuilder,
    private authService:AuthService

  ) { }

  ngOnInit() {
  }
  authenticate(loginForm:any){
    console.log(loginForm);
    this.authService.authenticate(loginForm).subscribe((response)=>{
      
    })
    

  }

}
