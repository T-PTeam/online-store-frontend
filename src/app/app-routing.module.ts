import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { AddProductsComponent } from './products/add-products/add-products.component';

const routes: Routes = [
  {
    path: 'categories/add',
    component: AddCategoryComponent
  },
  {
    path: 'products/add',
    component: AddProductsComponent
  },
  {
    path: 'products/:categorySlug',
    component: ProductsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
