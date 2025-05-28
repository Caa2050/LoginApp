import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiServicesService } from 'src/app/Services/api-services.service';
import { SignUp } from 'src/app/SignUp';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    
    signUpForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      birthDate: new FormControl(''),
      userName: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    });
    constructor(private apiService: ApiServicesService){
      this.getUser();
    }
    onSubmit(){
       if(this.signUpForm.value.password != this.signUpForm.value.confirmPassword){
          alert("Passwords don't match. Please make sure both fields are identical");
          return;
       }
        let signup = {
          name:this.signUpForm.value.name,
          email:this.signUpForm.value.email,
          birthDate:this.signUpForm.value.birthDate,
          userName:this.signUpForm.value.userName,
          password:this.signUpForm.value.password
        }
        console.log(signup)
        this.apiService.postUser(signup).subscribe({
          next:res=>{
            console.log(res)
          },
          error:err => {console.log(err)}
        })
    }
    getUser(){
      let user = this.apiService.getUserById(1);
    }
}
