import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassExampleComponent } from './class-example.component';

describe('ClassExampleComponent', () => {
  let component: ClassExampleComponent;
  let fixture: ComponentFixture<ClassExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
