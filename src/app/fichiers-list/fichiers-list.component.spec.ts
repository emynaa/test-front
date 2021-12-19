import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichiersListComponent } from './fichiers-list.component';

describe('FichiersListComponent', () => {
  let component: FichiersListComponent;
  let fixture: ComponentFixture<FichiersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichiersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichiersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
