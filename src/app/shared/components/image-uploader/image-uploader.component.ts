import { Component, EventEmitter, Output } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
})
export class ImageUploaderComponent {

  imageUrl: string | undefined;

  @Output() imageUploaded = new EventEmitter<string>();

  async uploadImage(){
    const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });
    this.imageUrl = image.dataUrl;
    this.imageUploaded.emit(this.imageUrl);
  }
}
