import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Burrito } from './burrito';

describe('Burrito', () => {
  let component: Burrito;
  let fixture: ComponentFixture<Burrito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Burrito]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Burrito);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
