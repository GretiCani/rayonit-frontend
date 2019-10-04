import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliancesStateComponent } from './appliances-state.component';

describe('AppliancesStateComponent', () => {
  let component: AppliancesStateComponent;
  let fixture: ComponentFixture<AppliancesStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliancesStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliancesStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
