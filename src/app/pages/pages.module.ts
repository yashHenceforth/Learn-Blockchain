import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CollectionComponent } from './components/collection/collection.component';
import { LootboxComponent } from './components/lootbox/lootbox.component';
import { FaqComponent } from './components/faq/faq.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { CollectionDetailsComponent } from './components/collection-details/collection-details.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { ExploreComponent } from './components/explore/explore.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignInOtpComponent } from './components/sign-in-otp/sign-in-otp.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    CollectionComponent,
    LootboxComponent,
    FaqComponent,
    EditProfileComponent,
    WalletComponent,
    PagesComponent,
    CollectionDetailsComponent,
    MyAccountComponent,
    ExploreComponent,
    LoginComponent,
    SignUpComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    SignInOtpComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
