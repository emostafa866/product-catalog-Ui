import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  isLogged:boolean=false
  roles:any=[]
  constructor(private authService:AuthService , private router:Router ){}

  login(form:any){

    this.authService.login({username:form.value.email,password:form.value.password}).subscribe((res:any)=>{

      localStorage.setItem("JWT",res.access_token)

      this.router.navigate(['/products'])

      this.isLogged=true

      localStorage.setItem('isLogged',JSON.stringify(this.isLogged))

      localStorage.setItem('role',JSON.stringify(atob(res.access_token.split('.')[1])))

     this.roles =JSON.parse(localStorage.getItem('role')!) 

     this.roles=JSON.parse(this.roles)

     this.roles = this.roles.roles

     console.log((this.roles))
           

    },err=>console.log(err))
  }

}


