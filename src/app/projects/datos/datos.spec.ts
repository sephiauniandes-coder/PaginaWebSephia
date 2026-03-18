import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datos } from './datos';

describe('Datos', () => {
  let component: Datos;
  let fixture: ComponentFixture<Datos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Datos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Datos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
