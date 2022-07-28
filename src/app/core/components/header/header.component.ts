import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { LoginComponent } from 'src/app/pages/components/login/login.component';
import { SignUpComponent } from 'src/app/pages/components/sign-up/sign-up.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  
  items: MenuItem[] = [];
  isLoggedIn: boolean = false;;
  account:any;
  
  constructor(private primengConfig: PrimeNGConfig, private dialogSvc: DialogService) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.items = [{
      items: [{
        label: 'My Account',
        icon: 'pi pi-user',
      },
      {
        label: 'Wallet',
        icon: 'pi pi-wallet',
      },
      {
        label: 'Settings',
        icon: 'pi pi-th-large',
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out'
      }
      ]
    },
    ];
    this.isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));
  }

  openLoginDialog() {
    const loginDialogRef = this.dialogSvc.open(LoginComponent, {
    })
    loginDialogRef.onClose.subscribe((response) => {
      console.log(response);
      this.isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));
    })
  }
  openSignUpDialog() {
    const signUpDialogRef = this.dialogSvc.open(SignUpComponent, {});
  }
}
