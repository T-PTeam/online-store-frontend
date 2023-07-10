import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category.model';
import { OnlineStoreApiService } from 'src/app/shared/services/online-store-api.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {

  categories: Category[] = [];

  constructor(private onlineStoreApi: OnlineStoreApiService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.onlineStoreApi.getCategories(1, 1000)
    .subscribe(
      (categories) => {
        this.categories = categories;
        console.log(categories);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
