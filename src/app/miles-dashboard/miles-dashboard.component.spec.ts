import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilesDashboardComponent } from './miles-dashboard.component';

describe('MilesDashboardComponent', () => {
  let component: MilesDashboardComponent;
  let fixture: ComponentFixture<MilesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilesDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
