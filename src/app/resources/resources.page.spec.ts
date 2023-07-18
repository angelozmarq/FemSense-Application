import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ResourcesPage } from './resources.page';

describe('ResourcesPage', () => {
  let component: ResourcesPage;
  let fixture: ComponentFixture<ResourcesPage>;

  beforeEach(waitForAsync () => {
    fixture = TestBed.createComponent(ResourcesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
