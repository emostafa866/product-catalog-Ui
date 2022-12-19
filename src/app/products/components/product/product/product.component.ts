import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/app/products/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{

  constructor(private service:ProductService){}

  products:any[]=[]
  categories:any[]=[]
  productCart:any[]=[]

  ngOnInit(): void {
    this.getProducts()
   this.getCategories()
  }

  getProducts(){
    this.service.getAllproducts().subscribe((res:any)=>{
       this.products=res
    },err=>alert("not found"))
  }

  getCategories(){
    this.service.getAllCategories().subscribe((res:any)=>{
      for(let category of res){
        this.categories.push(category.name)
      }
    },err=>alert("not found"))
  }
    
  filterCategory(e:any){
    let value=e.target.value;
    value==='all'?this.getProducts(): this.getProductByCategory(value);
  }

  getProductByCategory(keyword:any){
    this.service.getProductByCategory(keyword).subscribe((res:any)=>{
      this.products=res
    },errr=>alert("error"))
  }

  addToCart(e:any){
    if ("cart" in localStorage){
      this.productCart=JSON.parse( localStorage.getItem("cart")!)
      let exist = this.productCart.find(product=>product.item.id==e.item.id)
      if(exist){
        alert("item is already in your cart")
      }else{
        this.productCart.push(e)
        localStorage.setItem("cart",JSON.stringify(this.productCart))
      }
    }else{
      this.productCart.push(e)
      localStorage.setItem("cart",JSON.stringify(this.productCart))
    }
  }
    
}
