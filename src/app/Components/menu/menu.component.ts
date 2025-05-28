import { Component } from '@angular/core';
import { ApiServicesService } from 'src/app/Services/api-services.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private apiService:ApiServicesService){}
  logOut(){
    this.apiService.logout().subscribe({
      next:res=>{
        console.log(res)
      },
      error:err =>{
        console.log(err)
      }
    })
  }
}
