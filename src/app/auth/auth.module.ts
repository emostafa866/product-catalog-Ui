import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    
  ],
  imports: [
    SharedModule,
    AuthRoutingModule,
    FormsModule,

  ],
  exports:[
    LoginComponent
  ]
})
export class AuthModule { }
