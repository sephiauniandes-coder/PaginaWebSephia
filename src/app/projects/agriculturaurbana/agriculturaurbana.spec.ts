import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agriculturaurbana } from './agriculturaurbana';

describe('Agriculturaurbana', () => {
  let component: Agriculturaurbana;
  let fixture: ComponentFixture<Agriculturaurbana>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Agriculturaurbana]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Agriculturaurbana);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
