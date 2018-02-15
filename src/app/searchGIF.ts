import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {GIFresult} from './GIFModel';

@Injectable()
export class SearchGIFService {

  constructor(private http: HttpClient) {
  }

  searchResult = [];

  getSearchResults(q: string, limit: string): Promise<any> {

    this.searchResult.length =0;

    const qs = new HttpParams()
      .set('q', q).set('limit', limit);

    console.log('inside service method');
    // Returns an observable
    return this.http.get('https://api.giphy.com/v1/gifs/search?api_key=8aNpCLOpsmWzaQc20NdsXvBRsDu8OmWZ', {params: qs})
      .take(1) // from observable take 1 from the stream
      .toPromise()
      .then((resp) => {

          // console.log("result: ", resp);

          for (let i of resp['data']) {

            let newGif: GIFresult = {
              title: i.title,
              downsized: i.images.downsized.url

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
