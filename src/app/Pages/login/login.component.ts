import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/Services/api-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private apiService:ApiServicesService, private route:Router){}
  loginData = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  })
  login(){
    let login = {
      userName: this.loginData.value.userName,
      password: this.loginData.value.password
    }
    this.apiService.postLogin(login).subscribe({
      next:()=>{
        this.route.navigate(['/home'])
      },
      error:err =>{
        console.log(err)
      }
    })
  }
}
