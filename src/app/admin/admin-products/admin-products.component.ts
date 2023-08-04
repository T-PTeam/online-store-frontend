import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { PaginationResponse } from 'src/app/shared/models/pagination-response.model';
import { OnlineStoreApiService } from 'src/app/shared/services/online-store-api.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products: PaginationResponse<Product> = new PaginationResponse<Product>();
  categorySlug: string = '';
  pageNumber: number = 1;
  pageRange: number = 10;

  constructor(private onlineStoreApi: OnlineStoreApiService, private route: ActivatedRoute, private toasrt: ToastrService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categorySlug = params['categorySlug'] || '';
      this.loadProducts();
    });
  }

  loadProducts(): void {
    this.onlineStoreApi.getProducts(this.pageNumber, this.pageRange, this.categorySlug)
    .subscribe(
      (products) => {
        this.products = products;
        console.log(products);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  removeProduct(id: number) {
    this.onlineStoreApi.deleteProduct(id)
      .subscribe({
        next: (product) => {
          this.loadProducts();
          this.toasrt.success("Product has been remove success!");
          console.log(product);
        },
        error: (error) => {
          this.toasrt.error(error.message);
          console.log(error);
        }
      });
  }  
}
