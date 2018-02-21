import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';


import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';
import {RetrieveGIFService} from '../../retrieveGIF';


@Component({
  selector: 'app-retrieval-form',
  templateUrl: './retrieval-form.component.html',
  styleUrls: ['./retrieval-form.component.css']
})
export class RetrievalFormComponent implements OnInit {


  @Output()
  DataReturned: EventEmitter<any> = new EventEmitter<any>();


  @ViewChild('retrieveForm')
  retrieveForm: NgForm;


  constructor(private retrieveService: RetrieveGIFService) {
  }

  ngOnInit() {
  }


  // service that returns a promise
  RetrieveGIFPService(): Promise<any> {

    console.log('callback method');
    return (this.retrieveService.getSearchResults(this.retrieveForm.value.search));

  }

}
