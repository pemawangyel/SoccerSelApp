import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "../_services/auth.service";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout();
    this.router.navigateByUrl('user/login');
  }
  
  accessControl():boolean {
    if(this.auth.isAdmin()){
      return true;
    }
  }

}
