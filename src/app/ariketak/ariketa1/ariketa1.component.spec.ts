import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ariketa1Component } from './ariketa1.component';

describe('Ariketa1Component', () => {
  let component: Ariketa1Component;
  let fixture: ComponentFixture<Ariketa1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ariketa1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ariketa1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
