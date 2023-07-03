import { Component, OnInit } from '@angular/core';
import { OnlineStoreApiService } from 'src/app/shared/services/online-store-api.service';
import { Category } from 'src/app/shared/models/category.model';

@Component({
  selector: 'app-catgory-list',
  templateUrl: './catgory-list.component.html',
  styleUrls: ['./catgory-list.component.css']
})
export class CatgoryListComponent implements OnInit {
  categories: Category[] = [];

  constructor(private onlineStoreApi: OnlineStoreApiService) { }

  ngOnInit(): void {
    this.onlineStoreApi.getCategories(1,10)
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
