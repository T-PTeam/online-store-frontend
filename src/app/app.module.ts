import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { AddProductsComponent } from './products/add-products/add-products.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { EditProductsComponent } from './products/edit-products/edit-products.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    AddCategoryComponent,
    ProductsListComponent,
    AddProductsComponent,
    AdminProductsComponent,
    AdminCategoriesComponent,
    EditProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
