import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthnicFusionWearComponent } from './ethnic-fusion-wear.component';

describe('EthnicFusionWearComponent', () => {
  let component: EthnicFusionWearComponent;
  let fixture: ComponentFixture<EthnicFusionWearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthnicFusionWearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthnicFusionWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
