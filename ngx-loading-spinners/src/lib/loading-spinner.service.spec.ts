import { TestBed } from '@angular/core/testing';

import { LoadingSpinnersService } from './loading-spinners.service';

describe('LoadingSpinnersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadingSpinnersService = TestBed.get(LoadingSpinnersService);
    expect(service).toBeTruthy();
  });
});
