import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { LoginComponent } from 'src/app/pages/components/login/login.component';
import { SignUpComponent } from 'src/app/pages/components/sign-up/sign-up.component';
import { CommonService } from 'src/app/shared/services/common.service';
import { Web3Service } from 'src/app/shared/web3-Services/web3.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DialogService]
})
export class HeaderComponent implements OnInit {
  
  isLoggedIn: boolean = false;
  accountAddress: any;
  constructor(private commonSvc: CommonService, private web3Svc: Web3Service, private dailogSvc: DialogService) {}

  ngOnInit(): void {
  }

  goForward(): void {

  }

  openLoginDialog() {
    const loginDailogRef = this.dailogSvc.open(LoginComponent, {
      data: [],
    })
  }

  openSignUpDialog() {
    const signUpDialogRef = this.dailogSvc.open(SignUpComponent, {
      data: []
    })
  }
}
