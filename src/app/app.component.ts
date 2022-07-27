import { Component, OnInit } from '@angular/core';
import { ethers } from 'ethers';
import { BehaviorSubject, Subject } from 'rxjs';
declare let window: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Learn-Blockchain';
  provider: any;
  accounts: any;
  walletAddress: Subject<any> = new BehaviorSubject<any>('');

  constructor() {}

  ngOnInit() {
    this.connectFromMetaMask();
  }

  // This function return ethereum object
  isEthereum() {
    return window.ethereum;
  }

  // This is use for connect from meta mask
  async connectFromMetaMask() {
    const metamask = this.isEthereum();

    if(metamask) {
      const accounts = await metamask.request({ method: "eth_requestAccounts", params: ["latest"]});
      console.log("Account: ", accounts[0]);
      this.getProvider();
      this.walletAddress.next(accounts[0]);
      return { accounts: accounts[0], metamask };
    }
    else {
       return {metamask: null}
    }
  }

  async getProvider() {
    const { metamask } = await this.connectFromMetaMask();
    if(metamask) {
      const Web3Provider = new ethers.providers.Web3Provider(metamask);
      this.getSigner();
      return Web3Provider;
    } 
    else {
      return null;
    }
  }

  async getSigner() {
    const provider = await this.getProvider();

    if(provider) {
      const signer = await provider.getSigner();
      console.log(signer);
      return signer;
    }
    else {
      return null;
    }
  }

  getWalletDetails(signer: any) {
    const balance = signer.getBalance();
    const balanceInEth = ethers.utils.formatEther(balance);
  }
}
