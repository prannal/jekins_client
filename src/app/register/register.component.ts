import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  world={"Country":"","Year":"","NoofTeam":"","Venue":""};

  constructor(private route:ActivatedRoute,
    private router:Router,
    private service:DataService)
   {
    }

  ngOnInit() {
  }
  insert()
  {
    console.log(this.world);
    var observableResult=this.service.insert(this.world);
    observableResult.subscribe((result)=>{ 
       console.log(result);
       this.router.navigate(['home']);
      });
  

}


  }