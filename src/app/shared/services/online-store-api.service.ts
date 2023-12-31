import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';
import { environment } from 'src/app/environments/environment';
import { PaginationResponse } from '../models/pagination-response.model';

@Injectable({
    providedIn: 'root'
})

export class OnlineStoreApiService {

    onlineStoreApiUrl: string = environment.baseApiUrl;

    constructor(private http: HttpClient) { }

    //Products
    getProducts(pageNumber: number, pageSize: number, categorySlug: string = ""): Observable<PaginationResponse<Product>> {
        const params = new HttpParams()
          .set('pageNumber', pageNumber.toString())
          .set('pageSize', pageSize.toString())
          .set('categorySlug', categorySlug);
        return this.http.get<PaginationResponse<Product>>(this.onlineStoreApiUrl + '/products', {params});
    }

    getProductById(id: number): Observable<Product> {
        return this.http.get<Product>(this.onlineStoreApiUrl + `/products/${id}`);
    }

    addProduct(data: Product) {
        const apiUrl = `${this.onlineStoreApiUrl}/products`;
        const form = new FormData;
        form.append('name', data.name);
        form.append('slug', data.slug);
        form.append('description', data.description);
        form.append('categoryId', data.categoryId.toString());
        form.append('categoryName', data.categoryName)
        form.append('price', data.price.toString());
        form.append('image', data.image);
        return this.http.post(apiUrl, form);
    }

    updateProduct(data: Product) {
        const apiUrl = `${this.onlineStoreApiUrl}/products`;
        const form = new FormData;
        form.append('id', data.id.toString());
        form.append('name', data.name);
        form.append('slug', data.slug);
        form.append('description', data.description);
        form.append('categoryId', data.categoryId.toString());
        form.append('categoryName', data.categoryName)
        form.append('price', data.price.toString());
        form.append('image', data.image);
        return this.http.put(apiUrl, form);
    }

    deleteProduct(id: number) : Observable<Product> {
        const requestBody = { id: id };
        return this.http.delete<Product>(this.onlineStoreApiUrl + `/products/`, {body: requestBody});
    }
      
    //Category
    getCategories(pageNumber: number, pageSize: number): Observable<Category[]> {
        const params = new HttpParams()
          .set('pageNumber', pageNumber.toString())
          .set('pageSize', pageSize.toString());
      
        return this.http.get<Category[]>(`${this.onlineStoreApiUrl}/categories`, { params });
    }
      
    getCategoryById(id: number) : Observable<Category> {
        return this.http.get<Category>(this.onlineStoreApiUrl + `/categoreis/${id}`);
    }

    addCategory(addCategoryRequest: Category) {
        return this.http.post(this.onlineStoreApiUrl + '/categories', addCategoryRequest);
    }

    updatateCategory(data: Category) {
        return this.http.put(this.onlineStoreApiUrl + '/categories', data);
    }

    deleteCategory(id: number) {
        return this.http.delete(this.onlineStoreApiUrl + `/categories/${id}`);
    }
}
