import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionallComponent } from './adoptionall.component';

describe('AdoptionallComponent', () => {
  let component: AdoptionallComponent;
  let fixture: ComponentFixture<AdoptionallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdoptionallComponent]
    });
    fixture = TestBed.createComponent(AdoptionallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
