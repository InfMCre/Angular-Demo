import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ariketa2PageComponent } from './ariketa2-page.component';

describe('Ariketa2PageComponent', () => {
  let component: Ariketa2PageComponent;
  let fixture: ComponentFixture<Ariketa2PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ariketa2PageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ariketa2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
