import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacePersonnelComponent } from './espace-personnel.component';

describe('EspacePersonnelComponent', () => {
  let component: EspacePersonnelComponent;
  let fixture: ComponentFixture<EspacePersonnelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspacePersonnelComponent]
    });
    fixture = TestBed.createComponent(EspacePersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
