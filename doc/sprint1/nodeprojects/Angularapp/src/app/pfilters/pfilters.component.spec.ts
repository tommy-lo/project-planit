import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfiltersComponent } from './pfilters.component';

describe('PfiltersComponent', () => {
  let component: PfiltersComponent;
  let fixture: ComponentFixture<PfiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
