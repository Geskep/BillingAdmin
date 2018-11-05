import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeducibleListComponent } from './deducible-list.component';

describe('DeducibleListComponent', () => {
  let component: DeducibleListComponent;
  let fixture: ComponentFixture<DeducibleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeducibleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeducibleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
