import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dron } from './dron';

describe('Dron', () => {
  let component: Dron;
  let fixture: ComponentFixture<Dron>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dron]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dron);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
