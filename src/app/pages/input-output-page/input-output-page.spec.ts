import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputPage } from './input-output-page';

describe('InputOutputPage', () => {
  let component: InputOutputPage;
  let fixture: ComponentFixture<InputOutputPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputOutputPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputOutputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
