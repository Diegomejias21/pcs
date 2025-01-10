import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagPage } from './pag.page';

describe('PagPage', () => {
  let component: PagPage;
  let fixture: ComponentFixture<PagPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PagPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
