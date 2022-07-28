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
  }
}
