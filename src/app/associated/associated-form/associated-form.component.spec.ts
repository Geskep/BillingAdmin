import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatedFormComponent } from './associated-form.component';

describe('AssociatedFormComponent', () => {
  let component: AssociatedFormComponent;
  let fixture: ComponentFixture<AssociatedFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociatedFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
