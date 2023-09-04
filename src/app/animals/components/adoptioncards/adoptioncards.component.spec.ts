import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptioncardsComponent } from './adoptioncards.component';

describe('AdoptioncardsComponent', () => {
  let component: AdoptioncardsComponent;
  let fixture: ComponentFixture<AdoptioncardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdoptioncardsComponent]
    });
    fixture = TestBed.createComponent(AdoptioncardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
