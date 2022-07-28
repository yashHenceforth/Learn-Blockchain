import { Injectable } from '@angular/core';
import { ethers } from 'ethers';
import { MessageService } from 'primeng/api';
declare let window: any;
@Injectable({
  providedIn: 'root'
})
export class Web3Service {

  accounts: any;
  Web3Provider: any;
  signer: any;
  metaMask: any;
  constructor(private messageSvc: MessageService) 
  { 
    this.metaMask = window.ethereum;
    console.log("Ethereum have Installed:- ", this.metaMask); 
  }

  async requestforConnection() {
    return await this.metaMask.request({ method: "eth_requestAccounts", params: ["latest"] });
  }

  async detectAccountChange() {
    return await this.metaMask.on("accountChanged", (e: any) => {
      console.log("Detected Account Change");
    })
  }

  async callEther() {
    return await new ethers.providers.Web3Provider(this.metaMask);
  }

  async printDatabyEther() {
    if(await this.callEther()) {
      const signer = (await this.callEther()).getSigner();
      const balance = await signer.getBalance()
      const balanceInEther = await ethers.utils.formatEther(balance);
      return { "balance": balance, "balanceInEther": balanceInEther }
    }
    else {
      return { "balance": null, "balanceInEther": null }
    }
  }
}
