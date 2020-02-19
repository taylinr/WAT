import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Website} from '../../website/website.model';

@Injectable({
  providedIn: 'root'
})
export class WebsiteInteractionService {

  private newWebsiteSource = new Subject<Website>();
  newWebsite$ = this.newWebsiteSource.asObservable();
  constructor() { }

  updateList(websiteUpdate) {
    this.newWebsiteSource.next(websiteUpdate);
  }
}

