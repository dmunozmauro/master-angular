import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidoComponent } from './liquido.component';

describe('LiquidoComponent', () => {
  let component: LiquidoComponent;
  let fixture: ComponentFixture<LiquidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
