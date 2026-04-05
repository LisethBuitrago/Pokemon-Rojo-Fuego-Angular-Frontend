import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app'; // <-- Cambio 1 aquí

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent], // <-- Cambio 2 aquí
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // <-- Cambio 3 aquí
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // ... (puede que tengas otras pruebas abajo, asegúrate de cambiar App por AppComponent en todas)
});
