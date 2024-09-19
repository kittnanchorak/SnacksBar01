import { ComponentFixture, TestBed } from '@angular/core/testing';
import { foodPage } from './food.page';

describe('FoodPage', () => {
  let component: foodPage;
  let fixture: ComponentFixture<foodPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(foodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
