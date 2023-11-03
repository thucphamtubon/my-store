import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConfirmationComponent } from './order-confirmation.component';

describe('OrderConfirmationPageComponent', () => {
  let component: OrderConfirmationComponent;
  let fixture: ComponentFixture<OrderConfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderConfirmationComponent]
    });
    fixture = TestBed.createComponent(OrderConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
