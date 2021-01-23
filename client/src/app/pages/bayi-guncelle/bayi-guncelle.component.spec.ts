import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BayiGuncelleComponent } from './bayi-guncelle.component';

describe('BayiGuncelleComponent', () => {
  let component: BayiGuncelleComponent;
  let fixture: ComponentFixture<BayiGuncelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BayiGuncelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BayiGuncelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
