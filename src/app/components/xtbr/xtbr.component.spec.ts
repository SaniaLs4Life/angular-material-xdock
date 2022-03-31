import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XtbrComponent } from './xtbr.component';

describe('XtbrComponent', () => {
  let component: XtbrComponent;
  let fixture: ComponentFixture<XtbrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XtbrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XtbrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
