import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsLevelThreeOneComponent } from './products-level-three-one.component';

describe('ProductsLevelThreeOneComponent', () => {
  let component: ProductsLevelThreeOneComponent;
  let fixture: ComponentFixture<ProductsLevelThreeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsLevelThreeOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsLevelThreeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
