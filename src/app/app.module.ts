import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { JwtInterceptor } from './interceptor/jwt.interceptor';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { NotfoundModule } from './notfound/notfound.module';
import { OrdersModule } from './orders/orders.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule,
    CartModule,
    AuthModule,
    NotfoundModule,
    OrdersModule
    

  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi:true
  }
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
