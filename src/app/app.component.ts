import { Component, OnInit } from '@angular/core';
import { ethers } from 'ethers';
import { BehaviorSubject, Subject } from 'rxjs';
import { Web3Service } from './shared/web3-Services/web3.service';
declare let window: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Learn-Blockchain';

  constructor(private web3Svc: Web3Service) {}

  ngOnInit() {
    this.web3Svc.checkMetaMask();
  }
}
