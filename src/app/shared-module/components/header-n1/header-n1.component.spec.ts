import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderN1Component } from './header-n1.component';

describe('HeaderN1Component', () => {
  let component: HeaderN1Component;
  let fixture: ComponentFixture<HeaderN1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderN1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderN1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
