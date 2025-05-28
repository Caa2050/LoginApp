import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from 'src/app/Services/api-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message = ''
  constructor(private apiService: ApiServicesService){

  }
  ngOnInit(): void {
    this.getUser()
  }
  getUser(){
    this.apiService.getUser().subscribe(
      (res:any) => {
        this.message = `Hi ${res.name}`;
      },
      err => {
        this.message = 'You are not logget in';
      }
    )
  }
}
