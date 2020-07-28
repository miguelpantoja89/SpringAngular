import { Component, OnInit } from '@angular/core';
import { SpringConsumerService } from 'src/app/services/spring-consumer.service';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {

  users : any;
  constructor(private service: SpringConsumerService ) { }

  ngOnInit(): void {
    let resp=this.service.getUsers();
    resp.subscribe((data)=>this.users=data);
  }
  public removeUser(id:number){
    let resp= this.service.deleteUser(id);
    resp.subscribe((data)=>this.users=data);
   }

}
