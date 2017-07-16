import { Component, OnInit } from '@angular/core';
import {YoutubeapiService} from '../youtubeapi.service';
import { VideoDescription } from '../video-description';
import 'rxjs/Rx';

@Component({
  selector: 'app-playlistvideos',
  template: `
  <div class="row">
    <div class="col-md-3 col-sm-6 col-xs-2 col-lg-3" *ngFor="let result of results">
     <youtube-player
     width=300
     height=225
      [videoId]="result.snippet.resourceId.videoId"
      (ready)="savePlayer($event)"
      (change)="onStateChange($event)"
    ></youtube-player>
    </div>
    </div>`,
  styleUrls: ['./playlistvideos.component.css'],
  providers: [YoutubeapiService]
})
export class PlaylistvideosComponent implements OnInit {

results: VideoDescription[];


constructor (public youtube:YoutubeapiService) {
  // this.results = youtube.search(query => youtube.search("PL1NMB-VcROIRiimcb5osH7EldDC7iyLtz"));
  // console.log(this.results);
}


  ngOnInit() {
     this.youtube.getVideos("PL1NMB-VcROIRD2XnDsfAGjYGThOtIB9oa").subscribe(results => console.log(this.results = results));
     console.log(this.results);
  }

}
