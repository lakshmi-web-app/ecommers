import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManAccessoriesComponent } from './man-accessories.component';

describe('ManAccessoriesComponent', () => {
  let component: ManAccessoriesComponent;
  let fixture: ComponentFixture<ManAccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManAccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
