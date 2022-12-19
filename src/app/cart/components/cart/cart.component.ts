import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  cartProducts:any=[]
  productOrders:any[]=[]
  order:any={}
  total:any=0;

constructor(private cartService:ServiceService){

}
  ngOnInit(): void {
    this.getCartProduct();
  }

  getCartProduct(){
    if("cart" in localStorage){
      this.cartProducts=JSON.parse(localStorage.getItem("cart")!)
     // console.log(this.cartProducts)
      this.getTotalprice()
    }
  }

  getTotalprice(){
    this.total=0;
    for(let x in this.cartProducts){
      this.total+=this.cartProducts[x].item.price * this.cartProducts[x].quantity
    }
  }

  update(){
    this.getTotalprice();
    localStorage.setItem('cart',JSON.stringify(this.cartProducts))
  }

  increaseAmount(index:any){
    this.cartProducts[index].quantity++;
    this.getTotalprice();
    localStorage.setItem('cart',JSON.stringify(this.cartProducts))

  }

  decreaseAmount(index:any){
    this.cartProducts[index].quantity--
    this.getTotalprice()
    localStorage.setItem('cart',JSON.stringify(this.cartProducts))

  }

  deleteProduct(index:any){
    this.cartProducts.splice(index,1)
    this.getTotalprice();
    localStorage.setItem('cart',JSON.stringify(this.cartProducts))
  }

  clearCart(){
    this.cartProducts=[];
    this.total=0
    localStorage.setItem('cart',JSON.stringify(this.cartProducts))
  }
  orderItems(){
    for(let product of this.cartProducts){
      this.productOrders.push({productId:product.item.id,quantity:product.quantity})
    }
    this.order.products=this.productOrders;
    this.cartService.order(this.order).subscribe(res=>{
      console.log(res)
    })
    
  }
  
}
