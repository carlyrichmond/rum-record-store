import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { MainSplashComponent } from './main-splash.component';

describe('MainSplashComponent', () => {
  let component: MainSplashComponent;
  let fixture: ComponentFixture<MainSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSplashComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MainSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render successfully', () => {
    expect(component).toBeTruthy();
  });
});
