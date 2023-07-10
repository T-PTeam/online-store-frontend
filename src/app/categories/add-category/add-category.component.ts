import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private onlineStoreApi: OnlineStoreApiService,
    private toasrt: ToastrService){ }

  ngOnInit(): void {
    this.addCategory
  }

  addCategory(form: NgForm) {
    this.onlineStoreApi.addCategory(this.addCategoryRequest)
    .subscribe({
      next: (category)=> {
        this.resetForm(form);
        this.toasrt.success('Category has been add success!');
        console.log(category);
      },
      error: (err)=> {
        this.toasrt.error(err.message);
        console.log(err);
      },
    });
  }

  updateSlug() {
    this.addCategoryRequest.slug = this.addCategoryRequest.name.toLowerCase();
  }
  
  resetForm(from: NgForm){
    from.form.reset();
    this.addCategoryRequest = new Category(0, '','');
  }
}
