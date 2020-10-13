import { TestBed } from '@angular/core/testing';

import { TextServicesService } from './text-services.service';

describe('TextServicesService', () => {
  let service: TextServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
