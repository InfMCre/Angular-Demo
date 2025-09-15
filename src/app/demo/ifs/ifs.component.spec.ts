import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfsComponent } from './ifs.component';

describe('IfsComponent', () => {
  let component: IfsComponent;
  let fixture: ComponentFixture<IfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
