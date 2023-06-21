import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    button {
      position: fixed;
      top: 30%;
      left: 50%;
    }
  `]
})
export class LoginComponent  {

  constructor( private router: Router,
               private authService: AuthService
             ) { }

  login() {
    this.authService.login()
      .subscribe(resp => {      
        if(resp.id){
          this.router.navigate(['./heroes']);
        }
    });
  }

}
