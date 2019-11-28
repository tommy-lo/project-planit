import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFiltersComponent } from './basicfilters.component';

describe('BasicFiltersComponent', () => {
  let component: BasicFiltersComponent;
  let fixture: ComponentFixture<BasicFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
