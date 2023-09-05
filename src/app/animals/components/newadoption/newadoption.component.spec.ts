import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewadoptionComponent } from './newadoption.component';

describe('NewadoptionComponent', () => {
  let component: NewadoptionComponent;
  let fixture: ComponentFixture<NewadoptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewadoptionComponent]
    });
    fixture = TestBed.createComponent(NewadoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
