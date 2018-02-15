import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Subscription} from 'rxjs/Subscription';


import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';

import {GIF} from "../../GIFModel";
import {SearchGIFService} from "../../searchGIF";

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

  url: string = "https://api.giphy.com/v1/gifs/search?api_key=8aNpCLOpsmWzaQc20NdsXvBRsDu8OmWZ";
  response = {};
  data = [];


  constructor(private http: HttpClient, private searchService : SearchGIFService) {
  }

  ngOnInit() {
  }


  //service that returns a promise
  searchGIFPService(): Promise<any>{

    console.log("callback method");
    return (this.searchService.getSearchResults(this.submitForm.value.search, this.submitForm.value.limit));
  }

  //method that returns a promise
  searchGIFP(): Promise<any> {

    let queryParams: HttpParams = new HttpParams().set("q", this.submitForm.value.search).set("limit", this.submitForm.value.limit);

    return (
      this.http.get(this.url, {params: queryParams})
        .take(1)
        .toPromise()
        .then((resp) => {

          console.log(resp['data']);

          let result = [];
          for (let i of resp['data']){
            result.push({
              title: i.title,
              url: i.images.downsized.url
            })
          }

          console.log(result);
        })
        .catch(error => {

          console.log(error);
        })

    )


  }

  // GET method that returns observable

  searchGIF() {


    console.log("button is pressed. string is: ", this.submitForm.value.search);

    let queryParams: HttpParams = new HttpParams().set("q", this.submitForm.value.search).set("limit", this.submitForm.value.limit);

    // console.log(queryParams.toString());

    this.http.get(this.url, {params: queryParams}).subscribe(
      (resp) => {


        console.log(resp['data']);

        let result = [];
        for (let i of resp['data']){
          result.push({
            title: i.title,
            url: i.images.downsized.url
          })
        }

        console.log(result);

      },
      (error) => {
        console.log(error)
      }
    );

    this.submitForm.reset();


  }

}
