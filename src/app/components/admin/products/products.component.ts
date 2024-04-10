import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../models/product-model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  products: Product[] = [];
  successMessage: string;
  errorMessage: string;
  isLoading: boolean;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {
    this.products = [];
    this.successMessage = '';
    this.errorMessage = '';
    this.isLoading = true;

    this.productsService.getProducts().subscribe({
      next: (products: any) => {
        this.products = products;
        console.log('Products:', this.products);
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error.message;
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
