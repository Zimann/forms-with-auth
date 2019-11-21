import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {ImageService} from '../../../services/image.service';

@Component({
  selector: 'app-user-photo-section',
  templateUrl: './user-photo-section.component.html',
  styleUrls: ['./user-photo-section.component.scss']
})
export class UserPhotoSectionComponent implements OnInit {

  public profileImageResize = false;
  public imageSource$ = new Subject();

  constructor(private imageService: ImageService) { }

  processImageFile(imageInput: HTMLInputElement) {
    let selectedImage: File;
    selectedImage = imageInput.files[0];

    const fileReader: FileReader = new FileReader();
    if (selectedImage) {
      fileReader.readAsDataURL(selectedImage);
      fileReader.onloadend = () => {
        // resize images based on width
        const imageReference = new Image();
        imageReference.src = String(fileReader.result);
        imageReference.onload = () => {
          this.profileImageResize = imageReference.width > 1100 && imageReference.width < 1300 ;
        };
        this.imageSource$.next(fileReader.result);

        // pass encoded image data to the service
        this.imageService.uploadProfilePic(fileReader.result);
      };
    }
  }


  ngOnInit() {
  }

}
