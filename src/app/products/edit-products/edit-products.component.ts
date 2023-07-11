import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { Category } from 'src/app/shared/models/category.model';
import { OnlineStoreApiService } from 'src/app/shared/services/online-store-api.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, of, tap } from 'rxjs';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {

  editProductRequest: Product = {
    id: 0,
    name: '',
    slug: '',
    description: '',
    categoryId: 0,
    categoryName: '',
    price: 0.00,
    image: ''
  };

  categories: Category[] = [];

  constructor(private onlineStoreApi: OnlineStoreApiService,  private toasrt: ToastrService, private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      mergeMap((params) => {
        const id = Number(params.get('id'));
        if (id) {
          return this.onlineStoreApi.getProductById(id);
        } else {
          return of(null);
        }
      }),
      tap((response) => {
        if (response) {
          this.editProductRequest = response;
        }
      }),
      mergeMap(() => this.onlineStoreApi.getCategories(1, 1000))
    ).subscribe(
      (categories) => {
        this.categories = categories;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  

  editProduct() {
    this.onlineStoreApi.updateProduct(this.editProductRequest)
    .subscribe({
      next: (product)=> {
        this.toasrt.success("Test");
        console.log(product);
      },
      error: (error)=> {
        this.toasrt.error(error.message);
        console.log(error);
      }
    })
  }
  
  updateSlug() {
    this.editProductRequest.slug = this.editProductRequest.name.toLowerCase();
  }
}
