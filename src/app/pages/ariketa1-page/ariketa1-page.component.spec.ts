import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ariketa1PageComponent } from './ariketa1-page.component';

describe('Ariketa1PageComponent', () => {
  let component: Ariketa1PageComponent;
  let fixture: ComponentFixture<Ariketa1PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ariketa1PageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ariketa1PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
