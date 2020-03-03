import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private newSearchSource = new Subject<string>();
  newSearch$ = this.newSearchSource.asObservable();

  constructor() {}

  updateSearchResults(updateString) {
    this.newSearchSource.next(updateString);
  }
}
