import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupForm=this.fb.group({
    name:[null,Validators.required],
    email:[null,Validators.required],
    numero:[null,Validators.required],
    password:[null,Validators.required]


  })
  constructor(
    private fb:FormBuilder,
    private authService:AuthService
  ) { }

  ngOnInit() {
  }
  SignupUser(formvalue:any){
    console.log(formvalue);
    this.authService.signup(formvalue).subscribe((response)=>{

      
    })
    

  }

}
