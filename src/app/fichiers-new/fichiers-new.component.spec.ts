import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichiersNewComponent } from './fichiers-new.component';

describe('FichiersNewComponent', () => {
  let component: FichiersNewComponent;
  let fixture: ComponentFixture<FichiersNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichiersNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichiersNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
