import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
     base64:any=''
     categories:any=[]
     category:any;


    constructor(private service:ProductService,private router:Router){}

  getImagePath(e:any){
    const file=e.target.files[0];
    const reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
    this.base64=reader.result;

    console.log(this.base64)
    }

  }
  
  addProduct(form:any){
  this.service.getCategoryByName(form.value.category).subscribe((res:any)=>{
   this.category = res.id;
    console.log(this.category)
    this.service.addProduct(this.category,
      {nameEn:form.value.nameEn,
        nameAr:form.value.nameAr,
        price:form.value.price,
        image:form.value.image,
        quantity:form.value.amount}
        ).subscribe((res:any)=>{
          console.log(res)
          this.router.navigate(['/products'])
  
        })
  })

 
    console.log(form.value)
  }

  getCategories(){
    this.service.getAllCategories().subscribe((res:any)=>{
       this.categories=res
    },err=>alert("not found"))
  }



}
