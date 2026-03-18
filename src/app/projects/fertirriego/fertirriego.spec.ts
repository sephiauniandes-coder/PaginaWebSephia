import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fertirriego } from './fertirriego';

describe('Fertirriego', () => {
  let component: Fertirriego;
  let fixture: ComponentFixture<Fertirriego>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Fertirriego]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fertirriego);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
