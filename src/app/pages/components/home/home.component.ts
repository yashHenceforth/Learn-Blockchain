import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.collectionBind();
  }
  collectionBind() {
    const collections = [
      { img: '../../../../assets/Images/tenor.gif', title: 'Red Gem', id: '101' },
      { img: '../../../../assets/Images/tenor.gif', title: 'Red Gem', id: '102' },
      { img: '../../../../assets/Images/tenor.gif', title: 'Red Gem', id: '103' },
    ];
    return collections;
  }

  viewCollection(id: any) {
    this.router.navigateByUrl('/collection-details', id);
  }
}
