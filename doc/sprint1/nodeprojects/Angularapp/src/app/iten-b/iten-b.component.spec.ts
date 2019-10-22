import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItenBComponent } from './iten-b.component';

describe('ItenBComponent', () => {
  let component: ItenBComponent;
  let fixture: ComponentFixture<ItenBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItenBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItenBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
