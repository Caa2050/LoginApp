import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiServicesService } from 'src/app/Services/api-services.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
    ForgotPasswordForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    })
    constructor(private apiServices:ApiServicesService){}

    onSubmit(){
      if(this.ForgotPasswordForm.value.password != this.ForgotPasswordForm.value.confirmPassword){
          alert("Passwords do not match. Please make sure both fields are identical")
          return;
      }
      let CreateNewPassword ={
        username : this.ForgotPasswordForm.value.username,
        password : this.ForgotPasswordForm.value.password
      }
      this.apiServices.putForgotPassword(CreateNewPassword).subscribe({
        next:res =>{
          console.log(res)
        },
        error: err =>{
          console.log(err)
        }
      })
    }
}
