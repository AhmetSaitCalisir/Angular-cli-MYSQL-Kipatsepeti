import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatisItemComponent } from './satis-item.component';

describe('SatisItemComponent', () => {
  let component: SatisItemComponent;
  let fixture: ComponentFixture<SatisItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatisItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SatisItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
