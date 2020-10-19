import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from "../_services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth:AuthService, private router:Router){}

  canActivate(): boolean {
    if (this.auth.isloggedIn()) {return true};
    this.router.navigateByUrl('/login');
    return false;
  }
  
}
