import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BayiItemComponent } from './bayi-item.component';

describe('BayiItemComponent', () => {
  let component: BayiItemComponent;
  let fixture: ComponentFixture<BayiItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BayiItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BayiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
