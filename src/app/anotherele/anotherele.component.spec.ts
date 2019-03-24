import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnothereleComponent } from './anotherele.component';

describe('AnothereleComponent', () => {
  let component: AnothereleComponent;
  let fixture: ComponentFixture<AnothereleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnothereleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnothereleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
