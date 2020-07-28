import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  User} from "src/app/user";
@Injectable({
  providedIn: 'root'
})
export class SpringConsumerService {

  constructor(private http:HttpClient) { 


  }
  public save(user: User) {
    return this.http.post<User>("http://localhost:8080/register", user);
  }
  public doRegistration(user){
    return this.http.post("http://localhost:8080/register",user,{responseType:'text' as 'json'});
  }
  public getUsers(){
    return this.http.get("http://localhost:8080/users");
  }
  public deleteUser(id){
    return this.http.delete("http://localhost:8080/delete/"+id);
  }
}
