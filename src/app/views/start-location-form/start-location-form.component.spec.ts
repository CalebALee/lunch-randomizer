import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartLocationFormComponent } from './start-location-form.component';

describe('StartLocationFormComponent', () => {
  let component: StartLocationFormComponent;
  let fixture: ComponentFixture<StartLocationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartLocationFormComponent]
    });
    fixture = TestBed.createComponent(StartLocationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
