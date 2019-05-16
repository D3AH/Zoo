import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnimalsUsersComponent } from './list-animals-users.component';

describe('ListAnimalsUsersComponent', () => {
  let component: ListAnimalsUsersComponent;
  let fixture: ComponentFixture<ListAnimalsUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAnimalsUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAnimalsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
