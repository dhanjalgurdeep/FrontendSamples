import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppelementComponent } from './appelement.component';

describe('AppelementComponent', () => {
  let component: AppelementComponent;
  let fixture: ComponentFixture<AppelementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppelementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
