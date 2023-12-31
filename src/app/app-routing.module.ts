import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { AddProductsComponent } from './products/add-products/add-products.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { EditProductsComponent } from './products/edit-products/edit-products.component';

const routes: Routes = [
  {
    path: 'products/:categorySlug',
    component: ProductsListComponent
  },
  {
    path: 'admin/products',
    component: AdminProductsComponent
  },
  {
    path: 'admin/categories',
    component: AdminCategoriesComponent
  },
  {
    path: 'admin/categories/add',
    component: AddCategoryComponent
  },
  {
    path: 'admin/products/add',
    component: AddProductsComponent
  },
  {
    path: 'admin/products/edit/:id',
    component: EditProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
