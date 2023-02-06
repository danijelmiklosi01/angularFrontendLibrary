import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListItemComponent } from './user-list-item.component';

describe('UserListItemComponent', () => {
  let component: UsersListItemComponent;
  let fixture: ComponentFixture<UsersListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
