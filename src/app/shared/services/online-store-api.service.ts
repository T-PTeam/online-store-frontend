import { HttpClient, HttpParams } from '@angular/common/http';
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
        return this.http.post(this.onlineStoreApiUrl + '/products', data);
    }

    updateProduct(data: Product) {
        return this.http.put(this.onlineStoreApiUrl + '/products', data);
    }

    deleteProduct(id: number) {
        return this.http.delete(this.onlineStoreApiUrl + `/products/${id}`);
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

    deleteCategory(id: number){
        return this.http.delete(this.onlineStoreApiUrl + `/categories/${id}`);
    }
}
