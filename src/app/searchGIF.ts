import {EventEmitter, Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class SearchGIFService {

  constructor(private http: HttpClient) {}

  getSearchResults(q: string, limit: string): Promise<any> {
    let qs = new HttpParams()
      .set('q', q).set('limit', limit);

    console.log("inside service method");
    //Returns an observable
    return (
      this.http.get('https://api.giphy.com/v1/gifs/search?api_key=8aNpCLOpsmWzaQc20NdsXvBRsDu8OmWZ', {params: qs})
        .take(1) //from observable take 1 from the stream
        .toPromise()
        .then((resp) => {
          let result = [];
          console.log("resp['data']:", resp['data']);
          for (let i of resp['data']){
            result.push({
              title: i.title,
              url: i.images.downsized.url
            })
          }
          console.log("result array:", result);
        })
        .catch( (error)=> {
          console.log(error);
        })
    ); //convert the event to a promise
  }
}
