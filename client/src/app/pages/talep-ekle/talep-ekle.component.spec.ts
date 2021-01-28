import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalepEkleComponent } from './talep-ekle.component';

describe('TalepEkleComponent', () => {
  let component: TalepEkleComponent;
  let fixture: ComponentFixture<TalepEkleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalepEkleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalepEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
