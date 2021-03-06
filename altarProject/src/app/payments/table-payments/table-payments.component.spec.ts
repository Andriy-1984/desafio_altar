import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsTableComponent } from './table-payments.component';

describe('GeneratorTableComponent', () => {
    let component: PaymentsTableComponent;
    let fixture: ComponentFixture<PaymentsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [PaymentsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(PaymentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
