import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Server} from '../../server/server.model';

@Injectable({
  providedIn: 'root'
})
export class ServerInteractionService {

  private newServerSource = new Subject<Server>();
  newServer$ = this.newServerSource.asObservable();
  constructor() { }

  updateList(serverUpdate) {
    this.newServerSource.next(serverUpdate);
  }
}

