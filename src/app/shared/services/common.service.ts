import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  isLoggedIn: Subject<any> = new BehaviorSubject<any>(false);
  constructor() { }
}
