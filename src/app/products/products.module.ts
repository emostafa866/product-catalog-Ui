import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductComponent } from './components/product/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductRoutingModule } from './product-routing.module';
import { AddProductComponent } from './components/add-product/add-product.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailsComponent,
    ProductCardComponent,
    AddProductComponent
  ],
  imports: [
    SharedModule,   
    ProductRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
  
})
export class ProductsModule { }
