import { Component, OnInit } from '@angular/core';
import { OnlineStoreApiService } from 'src/app/shared/services/online-store-api.service';
import { Category } from 'src/app/shared/models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private onlineStoreApi: OnlineStoreApiService) { }

  ngOnInit(): void {
    this.onlineStoreApi.getCategories(1,1000)
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
