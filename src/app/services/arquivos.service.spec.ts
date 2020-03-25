import { TestBed, inject } from '@angular/core/testing';

import { ArquivosService } from './arquivos.service';

describe('ArquivosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArquivosService]
    });
  });

  it('should be created', inject([ArquivosService], (service: ArquivosService) => {
    expect(service).toBeTruthy();
  }));
});
