import {Http, Response} from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { VideoDescription } from './video-description';
import 'rxjs/Rx';

const BASE_URL = "https://www.googleapis.com/youtube/v3/playlistItems";
const API_KEY = "AIzaSyAlHbSnXtUCEjMmkHTWaU4ny0vBdnQb6ds";

// https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%20&playlistId=PL1NMB-VcROIRD2XnDsfAGjYGThOtIB9oa&key=AIzaSyAlHbSnXtUCEjMmkHTWaU4ny0vBdnQb6ds&maxResults=50

@Injectable()
export class YoutubeapiService {

  constructor(private _http:Http) { }


getVideos(playlistId): Observable<VideoDescription[]>{
   console.log(this._http.get('&(BASE_URL)?part=snippet&maxResults=50&playlistId=PL1NMB-VcROIRD2XnDsfAGjYGThOtIB9oa&key=AIzaSyAlHbSnXtUCEjMmkHTWaU4ny0vBdnQb6ds').map(res => res.json()));
	return this._http.get(`${BASE_URL}?part=snippet&maxResults=50&playlistId=${playlistId}&key=${API_KEY}`)
  .map((res:Response)=> res.json())
  .map(json=>json.items);
 
} 

}
