import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category.model';
import { OnlineStoreApiService } from 'src/app/shared/services/online-store-api.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];

  constructor(private onlineStoreApi: OnlineStoreApiService) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.onlineStoreApi.getCategories(1, 10)
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
