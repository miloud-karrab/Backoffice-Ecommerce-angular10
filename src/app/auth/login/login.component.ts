import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NbLoginComponent } from '@nebular/auth';
import { LoginService } from '../login.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class NgxLoginComponent extends NbLoginComponent {
  user = { email : '', password:''};

  constructor(private s : LoginService,  router : Router){
    super(undefined,undefined,undefined,router);
  }

  showMessages = {success:'',error:undefined};
  email={};

  login()
  {
    this.s.login(this.user.email,this.user.password).subscribe(response=>
      {
        if(response.message){
          alert(response.message);
        }
        else{
          localStorage.setItem('isConnected',response.token);
          this.router.navigate(['/pages']);
        }
      });
  }
}