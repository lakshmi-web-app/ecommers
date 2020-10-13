import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManWesternWearComponent } from './man-western-wear.component';

describe('ManWesternWearComponent', () => {
  let component: ManWesternWearComponent;
  let fixture: ComponentFixture<ManWesternWearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManWesternWearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManWesternWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
