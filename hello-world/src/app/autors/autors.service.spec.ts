import { TestBed } from '@angular/core/testing';

import { AutorsService } from './autors.service';

describe('AutorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutorsService = TestBed.get(AutorsService);
    expect(service).toBeTruthy();
  });
});
