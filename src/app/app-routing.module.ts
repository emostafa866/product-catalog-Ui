import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuardGuard } from './guard/authentication-guard.guard';
import { NotfoundComponent } from './notfound/component/notfound/notfound.component';
import { OrderComponent } from './orders/components/order/order.component';


const routes: Routes = [
  
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) , canActivate:[AuthenticationGuardGuard]},
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule),canActivate:[AuthenticationGuardGuard] },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
 // { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)},
  {path:"orders",component:OrderComponent},
  //{path:'**',component:NotfoundComponent}


  
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
