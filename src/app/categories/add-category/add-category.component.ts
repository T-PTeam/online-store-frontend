import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/models/category.model';
import { OnlineStoreApiService } from 'src/app/shared/services/online-store-api.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  addCategoryRequest: Category = {
    id: 0,
    name: '',
    slug: ''
  };

  constructor(private onlineStoreApi: OnlineStoreApiService){ }

  ngOnInit(): void {
  
  }

  addCategory() {
    this.onlineStoreApi.addCategory(this.addCategoryRequest)
    .subscribe({
      next: (category)=>{
        console.log(category);
      }
    });
  }
}
