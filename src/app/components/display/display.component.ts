import { Component, OnInit } from '@angular/core';
import {SearchGIFService} from '../../searchGIF';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {


  constructor(private searchResults: SearchGIFService) { }

  ngOnInit() {

  }

  displayResults = this.searchResults.searchResult;

}
