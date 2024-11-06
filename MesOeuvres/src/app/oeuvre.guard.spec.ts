import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { OeuvreGuard } from './oeuvre.guard';
import { AuthService } from './services/auth.service';

describe('OeuvreGuard', () => {
  let guard: OeuvreGuard;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OeuvreGuard,
        { provide: AuthService, useValue: { isAdmin: () => true } }, // Simulation d'AuthService
        {
          provide: Router,
          useValue: { navigate: jasmine.createSpy('navigate') },
        }, // Simulation de Router
      ],
    });

    guard = TestBed.inject(OeuvreGuard); // Injection correcte du garde
    authService = TestBed.inject(AuthService); // Injection d'AuthService
    router = TestBed.inject(Router); // Injection de Router
  });

  it('should be created', () => {
    expect(guard).toBeTruthy(); // Vérifie que le garde est créé
  });

  it('should allow activation for admin', () => {
    spyOn(authService, 'isAdmin').and.returnValue(true); // Simulation de isAdmin pour retourner vrai
    expect(guard.canActivate).toBeTrue(); // Passez null pour les deux arguments
  });

  it('should deny activation for non-admin', () => {
    spyOn(authService, 'isAdmin').and.returnValue(false); // Simulation de isAdmin pour retourner faux
    expect(guard.canActivate).toBeFalse(); // Passez null pour les deux arguments
    expect(router.navigate).toHaveBeenCalledWith(['forbidden']); // Vérifie que la navigation a lieu
  });
});
