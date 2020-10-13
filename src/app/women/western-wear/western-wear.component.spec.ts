import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WesternWearComponent } from './western-wear.component';

describe('WesternWearComponent', () => {
  let component: WesternWearComponent;
  let fixture: ComponentFixture<WesternWearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WesternWearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WesternWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
