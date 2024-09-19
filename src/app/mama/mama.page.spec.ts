import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mamaPage } from './mama.page';

describe('MamaPage', () => {
  let component: mamaPage;
  let fixture: ComponentFixture<mamaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(mamaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
