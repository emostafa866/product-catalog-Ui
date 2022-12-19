import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details/product-details.component';
import { ProductComponent } from './components/product/product/product.component';

const routes: Routes = [
  
    {path:"",component:ProductComponent},
    {path:"details/:id",component:ProductDetailsComponent},
    {path:"add",component:AddProductComponent}

  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
