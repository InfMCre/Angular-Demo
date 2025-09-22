import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ariketa2Component } from './ariketa2.component';

describe('Ariketa2Component', () => {
  let component: Ariketa2Component;
  let fixture: ComponentFixture<Ariketa2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ariketa2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ariketa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
