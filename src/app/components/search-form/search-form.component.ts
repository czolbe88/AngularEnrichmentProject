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

  pageIndex: number = 0;
  limit: number =25;



  constructor(private http: HttpClient, private searchService: SearchGIFService) {
  }

  ngOnInit() {
  }


  totalItems = this.searchService.totalItems;

  // service that returns a promise
  searchGIFPService(): Promise<any> {

    console.log('callback method');
    return (this.searchService.getSearchResults(this.submitForm.value.search, this.limit, this.pageIndex));

  }


  pageEvent(pageEvent: PageEvent){

    console.log("pressed: ", pageEvent.pageIndex);
    this.pageIndex = pageEvent.pageIndex;
    this.limit = pageEvent.pageSize;

    this.searchGIFPService();




  }


  // method that returns a promise
  searchResults =[];

  searchGIFP(): Promise<any> {

    const queryParams: HttpParams = new HttpParams().set('q', this.submitForm.value.search).set('limit', this.submitForm.value.limit);

    return (
      this.http.get(this.url, {params: queryParams})
        .take(1)
        .toPromise()
        .then((resp) => {

          console.log(resp['data']);

          const result = [];
          for (const i of resp['data']) {
            result.push({
              title: i.title,
              url: i.images.downsized.url
            });
          }

          const searchResult = [];
          for (let i of resp['data']){

            let newGif : GIFresult = {
              title: i.title,
            downsized: i.url

            }
            searchResult.push(newGif);


          }
          // this.DataReturned.next(searchResult);

          console.log(searchResult);
        })

        .catch(error => {

          console.log(error);
        })

    );


  }

  // GET method that returns observable

  searchGIF() {


    console.log('button is pressed. string is: ', this.submitForm.value.search);

    const queryParams: HttpParams = new HttpParams().set('q', this.submitForm.value.search).set('limit', this.submitForm.value.limit);

    // console.log(queryParams.toString());

    this.http.get(this.url, {params: queryParams}).subscribe(
      (resp) => {


        console.log(resp['data']);

        const result = [];
        for (const i of resp['data']) {
          result.push({
            title: i.title,
            url: i.images.downsized.url
          });
        }

        console.log(result);

      },
      (error) => {
        console.log(error);
      }
    );

    this.submitForm.reset();


  }

}
