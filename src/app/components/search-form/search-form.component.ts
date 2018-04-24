import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';
import {PageEvent} from '@angular/material';


import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';

import {GIFresult} from '../../GIFModel';
import {SearchGIFService} from '../../searchGIF';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  private sub: Subscription;

  @Output()
  DataReturned: EventEmitter<any> = new EventEmitter<any>();


  @ViewChild('submitForm')
  submitForm: NgForm;

  url = 'https://api.giphy.com/v1/gifs/search?api_key=8aNpCLOpsmWzaQc20NdsXvBRsDu8OmWZ';

  data = [];

  pageIndex: number = 0;i
  limit: number =25;
  searchItem: any;
  totalItems: number = 0;
  totalPages: number = (this.totalItems / this.limit);


  constructor(private http: HttpClient, private searchService: SearchGIFService) {
  }

  ngOnInit() {

  }

  // service that returns a promise
  searchGIFPService(){

    this.searchItem = this.submitForm.value.search;

    console.log('callback method');
    this.searchService.getSearchResults(this.searchItem, this.limit, this.pageIndex);

    this.totalItems = this.searchService.totalItems;



  }

  // counter(i: number) {
  //   let numArray: number[] = new Array(i);
  //   let start:number = 1;
  //
  //   while ( start != i){
  //     numArray.push(start);
  //     start ++;
  //   }
  //
  //
  // }



}
