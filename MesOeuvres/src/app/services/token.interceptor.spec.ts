import { TestBed } from '@angular/core/testing';
import { HttpInterceptorFn } from '@angular/common/http';

import { TokenInterceptor } from './token.interceptor';

describe('tokenInterceptor', () => {
  let interceptor: TokenInterceptor;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenInterceptor], // Ajout du provider de l'intercepteur
    });

    interceptor = TestBed.inject(TokenInterceptor); // Injection de l'instance de TokenInterceptor
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
