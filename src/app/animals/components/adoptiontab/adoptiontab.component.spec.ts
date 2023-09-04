import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptiontabComponent } from './adoptiontab.component';

describe('AdoptiontabComponent', () => {
  let component: AdoptiontabComponent;
  let fixture: ComponentFixture<AdoptiontabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdoptiontabComponent]
    });
    fixture = TestBed.createComponent(AdoptiontabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
