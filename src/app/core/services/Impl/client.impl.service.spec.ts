import { TestBed } from '@angular/core/testing';

import { ClientImplService } from './client.impl.service';

describe('ClientImplService', () => {
  let service: ClientImplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientImplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
