import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MansEthicwearComponent } from './mans-ethicwear.component';

describe('MansEthicwearComponent', () => {
  let component: MansEthicwearComponent;
  let fixture: ComponentFixture<MansEthicwearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MansEthicwearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MansEthicwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
