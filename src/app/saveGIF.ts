import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class SaveGIFService {

  constructor(private httpClient: HttpClient) {
  }



  saveSearchResults(username: string, gifUrl: string, title: string) {


    // const body = {
    //   username: username,
    //   gifUrl: gifUrl,
    //   title: title
    // };


    console.log('saving the gif using saveGIF service: ', username, gifUrl, title);

    // this.httpClient.post('/Service/saveGif', body)
    //   .take(1)
    //   .toPromise()
    //   .then((resp) => {
    //
    //     console.log("post request sent");
    //   }
    // )
    //   .catch((error) => {
    //     console.log(error);
    //   });

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'

    });
    const params = new HttpParams();
    params.set('username', username);
    params.set('gifUrl', gifUrl);
    params.set('title', title);

    const options = {
      headers,
      params
    };

    let url = 'http://localhost:8080/saveGif?title=' + title + '&gifUrl=' + gifUrl + '&username=' + username;

// http://localhost:8080/saveGif?title=cat%20dragging%20GIF&gifUrl=https://media3.giphy.com/media/E0cyxhawhe9dm/giphy-downsized.gif&username=alex

    return this.httpClient
      .get(url);



  }

}
