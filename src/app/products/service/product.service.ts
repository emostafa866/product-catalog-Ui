import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient){}

  getAllproducts(){
    return this.http.get('http://localhost:8082/product')
  }

  addProduct(categoryId:any,model:any){
    return this.http.post(`http://localhost:8082/category/${categoryId}/product`,model)
  }

  getAllCategories(){
    return this.http.get('http://localhost:8082/category')
  }

  getProductByCategory(keyword:any){
    return this.http.get(`https://fakestoreapi.com/products/category/${keyword}`)
  }

  getProductById(id:any){
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }

  getCategoryByName(name:any){
    return this.http.get(`http://localhost:8082/category/get/${name}`)
  }
}
