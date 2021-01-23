import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitapItemComponent } from './kitap-item.component';

describe('KitapItemComponent', () => {
  let component: KitapItemComponent;
  let fixture: ComponentFixture<KitapItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitapItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitapItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
