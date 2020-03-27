import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMacrosComponent } from './view-macros.component';

describe('ViewMacrosComponent', () => {
  let component: ViewMacrosComponent;
  let fixture: ComponentFixture<ViewMacrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMacrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMacrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
