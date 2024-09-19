import { ComponentFixture, TestBed } from '@angular/core/testing';
import { snacksPage } from './snacks.page';

describe('SnacksPage', () => {
  let component: snacksPage;
  let fixture: ComponentFixture<snacksPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(snacksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
