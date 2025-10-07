import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayFormSimple } from './array-form-simple';

describe('ArrayFormSimple', () => {
  let component: ArrayFormSimple;
  let fixture: ComponentFixture<ArrayFormSimple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayFormSimple]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayFormSimple);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
