import { TestBed } from '@angular/core/testing';

import { NgxRutService } from './ngx-rut.service';

describe('NgxRutService', () => {
  let service: NgxRutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxRutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
