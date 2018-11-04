import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeducibleFormComponent } from './deducible-form.component';

describe('DeducibleFormComponent', () => {
  let component: DeducibleFormComponent;
  let fixture: ComponentFixture<DeducibleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeducibleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeducibleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
