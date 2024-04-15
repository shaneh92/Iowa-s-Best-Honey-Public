import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrl: './products-create.component.scss',
})
export class ProductsCreateComponent {
  constructor(public modalRef: MdbModalRef<ProductsCreateComponent>) {}
}
