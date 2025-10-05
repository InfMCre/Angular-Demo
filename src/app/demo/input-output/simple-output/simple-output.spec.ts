import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleOutput } from './simple-output';

describe('SimpleOutput', () => {
  let component: SimpleOutput;
  let fixture: ComponentFixture<SimpleOutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleOutput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleOutput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
