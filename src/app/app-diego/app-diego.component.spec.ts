import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDiegoComponent } from './app-diego.component';

describe('AppDiegoComponent', () => {
  let component: AppDiegoComponent;
  let fixture: ComponentFixture<AppDiegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDiegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDiegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
