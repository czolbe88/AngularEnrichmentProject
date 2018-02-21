import {Component, OnInit, ViewChild} from '@angular/core';
import {SearchGIFService} from '../../searchGIF';
import {SaveGIFService} from '../../saveGIF';
import {FormGroup, NgForm} from '@angular/forms';
import {GIFresult} from '../../GIFModel';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {


  allGiphy = [];
  savedGiphy = [];
  displayResults = [];
  hideDisplayResults = this.searchResults.hideDisplay;

  @ViewChild('saveForm')
  saveForm: NgForm;

  constructor(private searchResults: SearchGIFService, private saveGIF: SaveGIFService) {
  }

  ngOnInit() {

    console.log(this.hideDisplayResults);
    this.displayResults = this.searchResults.searchResult;

  }





  saveGif() {



    // console.log(this.saveForm.value);

    //resets the lists
    this.allGiphy.length = 0;
    this.savedGiphy.length = 0;

    let user: string = this.saveForm.value['user'];

    console.log('user is: ', user);

    // console.log('saveform.value[quot1quot]: ', this.saveForm.value['1']); //works


    for (let giphy in this.saveForm.value) {

      // console.log("title is: ", this.saveForm.value[giphy]['gifTitle']); //works

      let giphyObj = {

        title: this.saveForm.value[giphy]['gifTitle'],
        downsized: this.saveForm.value[giphy]['gifUrl'],
        cb: this.saveForm.value[giphy]['cb']

      };

      // console.log("giphyobj is: ", giphyObj); //works

      // console.log('gif object is:', this.saveForm.value[giphy]); //works

      // console.log(this.saveForm.value[giphy].gifTitle); //works

      // console.log(this.saveForm.value[giphy]['gifTitle']); //works

      this.allGiphy.push(giphyObj);


    }

    for (let giphyObj of this.allGiphy) { //note usage of 'of' keyword

      var checkbox = giphyObj['cb'];
      // var checkbox = this.saveForm.value[giphy]['cb'];
      if (checkbox == true) {

        // this.savedGiphy.push(giphyObj);

        // console.log("saving the gif: ", giphyObj.downsized, giphyObj.title );
        this.saveGIF.saveSearchResults(user, giphyObj.downsized, giphyObj.title);

      }
    }

    // console.log('list of all giphy:', this.allGiphy);
    // console.log('list of saved giphy: ', this.savedGiphy);


  }
}
