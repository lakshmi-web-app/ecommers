import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MansSportsWearComponent } from './mans-sports-wear.component';

describe('MansSportsWearComponent', () => {
  let component: MansSportsWearComponent;
  let fixture: ComponentFixture<MansSportsWearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MansSportsWearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MansSportsWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
