import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyCheckerHeaderDropdownComponent } from './faculty-checker-header-dropdown.component';

describe('FacultyCheckerHeaderDropdownComponent', () => {
  let component: FacultyCheckerHeaderDropdownComponent;
  let fixture: ComponentFixture<FacultyCheckerHeaderDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyCheckerHeaderDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyCheckerHeaderDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
