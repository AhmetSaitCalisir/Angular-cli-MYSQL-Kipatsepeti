import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BayiEkleComponent } from './bayi-ekle.component';

describe('BayiEkleComponent', () => {
  let component: BayiEkleComponent;
  let fixture: ComponentFixture<BayiEkleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BayiEkleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BayiEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
