import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaDialogoComponent } from './caja-dialogo';

describe('CajaDialogo', () => {
  let component: CajaDialogoComponent;
  let fixture: ComponentFixture<CajaDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CajaDialogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CajaDialogoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
