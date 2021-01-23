import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BayilerComponent } from './bayiler.component';

describe('BayilerComponent', () => {
  let component: BayilerComponent;
  let fixture: ComponentFixture<BayilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BayilerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BayilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
