import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalepItemComponent } from './talep-item.component';

describe('TalepItemComponent', () => {
  let component: TalepItemComponent;
  let fixture: ComponentFixture<TalepItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalepItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalepItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
