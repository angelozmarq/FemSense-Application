import { TestBed } from '@angular/core/testing';

import { TabServiceService } from './tab-service.service';

describe('TabServiceService', () => {
  let service: TabServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
