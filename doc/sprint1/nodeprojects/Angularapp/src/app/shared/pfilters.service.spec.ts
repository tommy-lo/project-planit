import { TestBed } from '@angular/core/testing';

import { PfiltersService } from './pfilters.service';

describe('PfiltersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PfiltersService = TestBed.get(PfiltersService);
    expect(service).toBeTruthy();
  });
});
