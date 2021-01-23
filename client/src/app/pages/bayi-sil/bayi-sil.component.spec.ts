import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BayiSilComponent } from './bayi-sil.component';

describe('BayiSilComponent', () => {
  let component: BayiSilComponent;
  let fixture: ComponentFixture<BayiSilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BayiSilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BayiSilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
