import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersOverviewComponent } from './user-overview.component';

describe('UserOverviewComponent', () => {
  let component: UsersOverviewComponent;
  let fixture: ComponentFixture<UsersOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
