import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiServicesService {
  private apiUrl = 'http://localhost:5175/LoginApi/User';
  private apiLoginUrl ='http://localhost:5175/LoginApi/User/login'
  private apiUserUrl = 'http://localhost:5175/LoginApi/User/user'
  private apiUserLogOut = 'http://localhost:5175/LoginApi/User/logout'
  constructor(private http: HttpClient) {}
  postUser(user: any) {
    console.log(user);
    return this.http.post(this.apiUrl, user);
  }
  getUserById(id:number){
    return this.http.get(`${this.apiUrl}/${id}`)
  }
  postLogin(login:any){
    return this.http.post(this.apiLoginUrl,login, {withCredentials:true})
  }
  putForgotPassword(newpassword:any){
    return this.http.put(this.apiUrl,newpassword)
  }
  getUser(){
    return this.http.get(this.apiUserUrl,{withCredentials:true})
  }
  putUser(user:any){
    return this.http.put(this.apiUserUrl,user)
  }
  logout(){
    return this.http.post(this.apiUserLogOut,{},{withCredentials:true})
  }
}
