import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { Category } from 'src/app/shared/models/category.model';
import { OnlineStoreApiService } from 'src/app/shared/services/online-store-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  
  addProductRequest: Product = {
    id: 0,
    name: '',
    slug: '',
    description: '',
    categoryId: 0,
    price: 0.00,
    image: ''
  };

  categories: Category[] = [];


  constructor(private onlineStoreApi: OnlineStoreApiService, private toasrt: ToastrService){ }

  //TODO: 
  ngOnInit(): void {
    this.onlineStoreApi.getCategories(1, 10)
    .subscribe(
      (categories) => {
        this.categories = categories;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addProduct(){
    this.onlineStoreApi.addProduct(this.addProductRequest)
    .subscribe({
      next: (product)=> {
        this.toasrt.success('Product has been add success!');
        console.log(product);
      },
      error: (err)=> {
        this.toasrt.error(err.message);
        console.log(err);
      },
    });
  }
}
