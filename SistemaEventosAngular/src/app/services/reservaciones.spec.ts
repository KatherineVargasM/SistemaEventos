import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http'; 
import { ReservacionesService } from './reservaciones'; 

describe('ReservacionesService', () => {
  let service: ReservacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(ReservacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
