import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { YoutubeVideoListComponent } from './youtube-video-list/youtube-video-list.component';
import { PlaylistvideosComponent } from './playlistvideos/playlistvideos.component';
import { YoutubePlayerModule } from 'ng2-youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    YoutubeVideoListComponent,
    PlaylistvideosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    YoutubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
