import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristiqueComponent } from './touristique.component';

describe('TouristiqueComponent', () => {
  let component: TouristiqueComponent;
  let fixture: ComponentFixture<TouristiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouristiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
