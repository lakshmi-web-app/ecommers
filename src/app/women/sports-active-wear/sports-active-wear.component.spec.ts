import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsActiveWearComponent } from './sports-active-wear.component';

describe('SportsActiveWearComponent', () => {
  let component: SportsActiveWearComponent;
  let fixture: ComponentFixture<SportsActiveWearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsActiveWearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsActiveWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
