import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppComponent} from './app.component';
import {SearchFormComponent} from './components/search-form/search-form.component';
import {HttpClientModule} from '@angular/common/http';
import {SearchGIFService} from "./searchGIF";
import { DisplayComponent } from './components/display/display.component';
import {SaveGIFService} from './saveGIF';
import {RetrieveGIFService} from './retrieveGIF';
import {RetrievalFormComponent} from './components/retrieval-form/retrieval-form.component';
import { DisplayUserGifComponent } from './components/display-user-gif/display-user-gif.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    DisplayComponent,
    RetrievalFormComponent,
    DisplayUserGifComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [SearchGIFService, SaveGIFService, RetrieveGIFService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
