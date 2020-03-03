import { Component, OnInit } from '@angular/core';
import {NgModel} from '@angular/forms';
import {SearchService} from '../services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  searchInput(searchString: NgModel) {
    console.log(searchString.value);
    this.searchService.updateSearchResults(searchString.value);
  }

}
