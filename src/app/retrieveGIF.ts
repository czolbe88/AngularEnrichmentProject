import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {GIFresult} from './GIFModel';

@Injectable()
export class RetrieveGIFService {

  constructor(private http: HttpClient) {
  }

  searchResult = [];

  getSearchResults(username: string): Promise<any> {

    this.searchResult.length =0;

    let url:string = 'http://localhost:8080/getGif?User=' +  username;

    // Returns an observable
    return this.http.get(url)
      .take(1) // from observable take 1 from the stream
      .toPromise()
      .then((resp) => {

           console.log("result: ", resp);

          for (let i in resp) {

            let newGif: GIFresult = {
              title: resp[i]['title'],
              downsized: resp[i]['url'],
              gifAdded: false

            };
            this.searchResult.push(newGif);

          }
          console.log("searchResult: ", this.searchResult);
        }
      )
      .catch((error) => {
        console.log(error);
      }); // convert the event to a promise
  }
}
