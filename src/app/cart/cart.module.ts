import { NgModule } from '@angular/core';
import { CartComponent } from './components/cart/cart.component';
import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
  CartRoutingModule,
    SharedModule
  ],
  exports:[
    
  ]

})
export class CartModule { }
