import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInOtpComponent } from './sign-in-otp.component';

describe('SignInOtpComponent', () => {
  let component: SignInOtpComponent;
  let fixture: ComponentFixture<SignInOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInOtpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
