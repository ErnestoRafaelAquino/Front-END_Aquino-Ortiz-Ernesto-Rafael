import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaykiComponent } from './hayki.component';

describe('HaykiComponent', () => {
  let component: HaykiComponent;
  let fixture: ComponentFixture<HaykiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaykiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaykiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
