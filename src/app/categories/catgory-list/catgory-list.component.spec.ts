import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatgoryListComponent } from './catgory-list.component';

describe('CatgoryListComponent', () => {
  let component: CatgoryListComponent;
  let fixture: ComponentFixture<CatgoryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatgoryListComponent]
    });
    fixture = TestBed.createComponent(CatgoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
