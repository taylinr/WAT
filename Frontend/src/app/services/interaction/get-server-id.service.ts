import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetServerIDService {

  private newServerIDSource = new Subject<string>();
  newServerID$ = this.newServerIDSource.asObservable();
  constructor() { }

  getWebsites(NewServerID) {
    console.log('serverID: ' + NewServerID);
    this.newServerIDSource.next(NewServerID);
  }
}
