import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  roles:any=[]
  constructor() { }

  isLogged(){
    let isUser= JSON.parse(localStorage.getItem('isLogged')!)
    return isUser;
  }

 /* isAdmin(){
    let payload= JSON.parse(localStorage.getItem('role')!)
   this.roles= payload.roles
   return JSON.parse(payload).roles[0]=='ROLE_ADMIN'
  }*/

}
