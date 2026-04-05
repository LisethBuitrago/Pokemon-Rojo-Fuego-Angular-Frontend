import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaIntroduccionComponent } from './pantalla-introduccion';

describe('PantallaIntroduccion', () => {
  let component: PantallaIntroduccionComponent;
  let fixture: ComponentFixture<PantallaIntroduccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PantallaIntroduccionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PantallaIntroduccionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
