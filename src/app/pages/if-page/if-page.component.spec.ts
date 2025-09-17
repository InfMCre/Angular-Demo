import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfPageComponent } from './if-page.component';

describe('IfPageComponent', () => {
  let component: IfPageComponent;
  let fixture: ComponentFixture<IfPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
