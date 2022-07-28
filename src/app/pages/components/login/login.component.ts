import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CommonService } from 'src/app/shared/services/common.service';
import { Web3Service } from 'src/app/shared/web3-Services/web3.service';
const PASSWORD_PATTERN = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService, DialogService, Web3Service]
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private messageSvc: MessageService, private dialogRef: DynamicDialogRef, private Web3Svc: Web3Service, private commonSvc: CommonService) { }

  ngOnInit(): void {
    this.InitializeLoginForm();
    if (localStorage.getItem("isLoggedIn") == "true") {
      this.LoginByEthereum();
    }
  }

  InitializeLoginForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.pattern(PASSWORD_PATTERN)]))
    })
  }
  accounts: any;
  async LoginByEthereum() {
    if (this.Web3Svc.metaMask) {
      this.accounts = await this.Web3Svc.requestforConnection().catch((error: any) => {
        if(error.code == 4001) 
        {
          localStorage.setItem("isLoggedIn", String(false));
          localStorage.setItem("walletAddress", "No Account Address");
          this.messageSvc.add({key: 'tc',severity:'error', summary: 'Error', detail: error.message});
        }
      });
      if (this.accounts) {
        this.Web3Svc.detectAccountChange();
        /** Store Account Address */
        localStorage.setItem("walletAddress", this.accounts[0]);
        /** Set User LoggedIn */
        localStorage.setItem("isLoggedIn", String(true));
        /** Call Signer to get Balance and Other Data */
        this.getWalletBalance();
        this.messageSvc.add({key: 'tc', severity:'success', summary: 'Success', detail: 'User Successfully Login'});
        setTimeout(() => {
          this.dialogRef.close();
        }, 1500);
      }
    }
  }
  async getWalletBalance() {
    const signer = await this.Web3Svc.printDatabyEther();
    if (signer) {
      const balance = signer.balance?._hex;
      const balanceInEther = signer.balanceInEther;
      return { "balance": balance, "balanceInEther": balanceInEther, "accounts": this.accounts[0] }
    }
    else {
      return { "balance": null, "balanceInEther": null, "accounts": null }
    }
  }

  ManuallyLogin() {

  }
  LoginByGoogle() {

  }
}
