import { Component, OnInit } from '@angular/core';
import {RetrieveGIFService} from '../../retrieveGIF';

@Component({
  selector: 'app-display-user-gif',
  templateUrl: './display-user-gif.component.html',
  styleUrls: ['./display-user-gif.component.css']
})
export class DisplayUserGifComponent implements OnInit {

  constructor(private retrievalService: RetrieveGIFService) { }

  ngOnInit() {
  }

  displayResults = this.retrievalService.searchResult;


}
