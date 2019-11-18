import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) {}

  uploadProfilePic(profilePicData) {
    console.log('upload photo to the server');
    // upload the photo data to the server
    // this.http.post('http://server-url', () => {
      // profilePicData: profilePicData

    // }).subscribe(data => console.log('not bad'));
  }
}
