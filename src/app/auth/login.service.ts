import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  users= [
    {
      login:'test@gmail.com', 
      password : 'test',
      token : 'eyhdlmdbqhmlksdfmdj'
    },
    {
      login:'toto@gmail.com', 
      password : 'titi',
      token : 'hdye2589sf55fd5'
    }
  ];

  login(login:string, password:string):Observable<any>
  {
    let found = this.users.find(u => u.login===login && u.password ==password);
    if (found)
    {
      return of(
        {
          user : found.login,
          token : found.token
        }
      )
    }
    else{
     return of(
        {
          code : '401',
          message : 'authentifcation failed'
        }
      )
    }
  }
}
