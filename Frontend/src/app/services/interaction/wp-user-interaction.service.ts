import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {WpUser} from '../../wp-user/wp-user.model';

@Injectable({
  providedIn: 'root'
})
export class WpUserInteractionService {


  private newWpUserSource = new Subject<WpUser>();
  newWpUser$ = this.newWpUserSource.asObservable();
  constructor() { }

  updateList(wpUserUpdate) {
    this.newWpUserSource.next(wpUserUpdate);
  }
}
