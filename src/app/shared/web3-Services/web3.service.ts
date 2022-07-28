import { Injectable } from '@angular/core';
declare let window: any;
@Injectable({
  providedIn: 'root'
})
export class Web3Service {

  isMetMask: any;
  accounts: any;
  constructor() { this.checkMetaMask(); }

  checkMetaMask() {
    this.isMetMask = window.ethereum;
  }

  async connectWithMetaMask() {
    if(this.isMetMask) {
      const accounts = await this.isMetMask.request({method: "eth_requestAccounts", params: ["latest"]}).catch((err: any) => {
        if(err.code == 4001) {
          console.log("Message:", err.message);
        }
      })
      return accounts;
    }
  }
}
