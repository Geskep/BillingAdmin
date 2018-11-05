import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatedListComponent } from './associated-list.component';

describe('AssociatedListComponent', () => {
  let component: AssociatedListComponent;
  let fixture: ComponentFixture<AssociatedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociatedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
