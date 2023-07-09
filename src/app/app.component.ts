import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MrWoody-Shop';
  categorySlug: string = '';

  filterByCategory(categorySlug: string): void {
    this.categorySlug = categorySlug;
  }
}
