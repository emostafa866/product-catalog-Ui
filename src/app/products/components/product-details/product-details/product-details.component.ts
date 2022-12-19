import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/products/service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
id:any
data:any={}
constructor(private route:ActivatedRoute , private service:ProductService){
  this.id=this.route.snapshot.paramMap.get("id")
}

  ngOnInit(): void {
    this.getProduct()
  }
getProduct(){
  this.service.getProductById(this.id).subscribe(res=>{
    this.data=res
  },err=>alert("error product not found"))
}

}
