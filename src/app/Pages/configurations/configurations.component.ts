import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiServicesService } from 'src/app/Services/api-services.service';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.css']
})
export class ConfigurationsComponent implements OnInit{
  value:string = ''
  user:any
  UpdateForm = new FormGroup({
          id: new FormControl(),
          name: new FormControl(),
          email: new FormControl(),
          birthDate: new FormControl(),
  })
  constructor(private apiService: ApiServicesService){

  }
  ngOnInit(): void {
    this.GetUser()
  }
  UpdateValue(value:string){
    this.value = value
  }
  GetUser(){
    this.apiService.getUser().subscribe(
      (res:any) =>{
          this.user = res
          this.UpdateForm.setValue({id:res.id,name:res.name,email:res.email,birthDate:res.birthDate})
      },
      err =>{
        console.log(err)
      }

    )
  }
  onSubmit(){
    this.user = this.UpdateForm.value
    this.apiService.putUser(this.user).subscribe({
      next: res=>{
        alert("User updated!")
        console.log(res)
      },
      error: err =>{
        alert("Something went wrong. Try again later.")
        console.log(err);
      }
    })
  }
}
