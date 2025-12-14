import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlDashboard } from './url-dashboard';

describe('UrlDashboard', () => {
  let component: UrlDashboard;
  let fixture: ComponentFixture<UrlDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
