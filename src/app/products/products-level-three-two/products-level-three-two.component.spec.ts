import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsLevelThreeTwoComponent } from './products-level-three-two.component';

describe('ProductsLevelThreeTwoComponent', () => {
  let component: ProductsLevelThreeTwoComponent;
  let fixture: ComponentFixture<ProductsLevelThreeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsLevelThreeTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsLevelThreeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
