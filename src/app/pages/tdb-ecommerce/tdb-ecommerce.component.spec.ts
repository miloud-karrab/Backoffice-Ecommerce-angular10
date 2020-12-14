import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdbEcommerceComponent } from './tdb-ecommerce.component';

describe('TdbEcommerceComponent', () => {
  let component: TdbEcommerceComponent;
  let fixture: ComponentFixture<TdbEcommerceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdbEcommerceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdbEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
