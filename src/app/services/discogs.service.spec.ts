import { TestBed } from '@angular/core/testing';

import { DiscogsService } from './discogs.service';

describe('DiscogsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiscogsService = TestBed.get(DiscogsService);
    expect(service).toBeTruthy();
  });
});
