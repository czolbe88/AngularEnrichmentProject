import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppComponent} from './app.component';
import {SearchFormComponent} from './components/search-form/search-form.component';
import {HttpClientModule} from '@angular/common/http';
import {SearchGIFService} from "./searchGIF";
import { DisplayComponent } from './components/display/display.component';
import {SaveGIFService} from './saveGIF';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [SearchGIFService, SaveGIFService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
