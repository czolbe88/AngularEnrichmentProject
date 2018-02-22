import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {GIFresult} from './GIFModel';
import {Router} from "@angular/router";

@Injectable()
export class SearchGIFService {

  constructor(private http: HttpClient, private router: Router) {
  }



  searchResult = [];

  hideDisplay: boolean = true;

  totalItems: number ;

  getSearchResults(q: string, limit: number, page: number): Promise<any> {



    let offset: number =  limit * page;

    this.searchResult.length =0;

    const qs = new HttpParams()
      .set('q', q).set('limit', limit.toString()).set('offset', offset.toString());

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

            this.totalItems = resp['pagination']['total_count'];
            console.log("total count is", this.totalItems);

          }
          if(this.searchResult.length > 0){
            this.hideDisplay = false;
            console.log(this.hideDisplay);
          }
          console.log("searchResult: ", this.searchResult);
        this.router.navigate(['/search']);

        }
      )
      .catch((error) => {
        console.log(error);
      }); // convert the event to a promise
  }
}
