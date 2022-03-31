import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XbrComponent } from './xbr.component';

describe('XbrComponent', () => {
  let component: XbrComponent;
  let fixture: ComponentFixture<XbrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XbrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XbrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
