import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CyclePage } from './cycle.page';

describe('CyclePage', () => {
  let component: CyclePage;
  let fixture: ComponentFixture<CyclePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CyclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
