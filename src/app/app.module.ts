import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ApiService } from './api.service';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ScrollingModule,
    NgbModule,
  ],
  declarations: [AppComponent],
  providers: [HttpClient, ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
