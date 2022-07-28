import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { CollectionDetailsComponent } from './components/collection-details/collection-details.component';
import { CollectionComponent } from './components/collection/collection.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ExploreComponent } from './components/explore/explore.component';
import { FaqComponent } from './components/faq/faq.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LootboxComponent } from './components/lootbox/lootbox.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { SignInOtpComponent } from './components/sign-in-otp/sign-in-otp.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { WalletComponent } from './components/wallet/wallet.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'explore', component: ExploreComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'collectionDetails/:id', component: CollectionDetailsComponent},
  { path: 'faq', component:  FaqComponent },
  { path: 'lootbox', component: LootboxComponent },

  { path: 'myAccount', component: MyAccountComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'signInOtp', component: SignInOtpComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'changePassword', component: ChangePasswordComponent},
  { path: 'wallet', component:  WalletComponent },
  { path: 'editProfile', component: EditProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
