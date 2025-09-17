import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForPageComponent } from './for-page.component';

describe('ForPageComponent', () => {
  let component: ForPageComponent;
  let fixture: ComponentFixture<ForPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
