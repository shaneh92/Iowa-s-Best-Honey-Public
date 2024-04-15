import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../models/product-model';
import { Observable } from 'rxjs';
import { get } from 'http';

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

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
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

  deleteProduct(id: string) {
    // Confirm the deletion for the user
    if (!confirm('Are you sure you want to delete this product?')) {
      return;
    }

    if (!id) {
      throw new Error('A valid Product ID is required');
    }
    console.log('Deleting product with ID:', id);
    this.productsService.deleteProduct(id).subscribe({
      next: () => {
        this.successMessage = 'Product deleted successfully';
        this.fetchProducts();
        this.hideAlert();
      },
      error: (err) => {
        console.log('err', err);
        this.errorMessage = err.message;
        this.hideAlert();
      },
    });
  }

  // this will have an alert message for 3 seconds
  hideAlert() {
    setTimeout(() => {
      this.errorMessage = '';
      this.successMessage = '';
    }, 3000);
  }
}
