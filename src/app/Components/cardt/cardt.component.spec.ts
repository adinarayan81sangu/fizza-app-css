import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardtComponent } from './cardt.component';

describe('CardtComponent', () => {
  let component: CardtComponent;
  let fixture: ComponentFixture<CardtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
