import { Component, OnInit, Input } from '@angular/core';
import { User  } from "src/app/user";
import { ActivatedRoute, Router } from '@angular/router';
import { SpringConsumerService } from "src/app/services/spring-consumer.service";

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrls: ['./registrer.component.css']
})
export class RegistrerComponent implements OnInit {

   user: User = new User("","");
  constructor(private route: ActivatedRoute, 
    private router: Router, private service: SpringConsumerService) {
   
   }

  ngOnInit(): void {
    
  }
  onSubmit() {
    this.service.save(this.user).subscribe(result => this.gotoUserList());
  }
 
  gotoUserList() {
    this.router.navigate(['/consume']);
  }

}
