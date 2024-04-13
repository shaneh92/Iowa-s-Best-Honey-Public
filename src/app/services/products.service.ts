import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get('/products');
  }
  deleteProduct(id: string) {
    return this.http.delete(`/products/${id}`);
  }
}
