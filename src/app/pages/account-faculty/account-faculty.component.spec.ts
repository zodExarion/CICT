import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountFacultyComponent } from './account-faculty.component';

describe('AccountFacultyComponent', () => {
  let component: AccountFacultyComponent;
  let fixture: ComponentFixture<AccountFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountFacultyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
