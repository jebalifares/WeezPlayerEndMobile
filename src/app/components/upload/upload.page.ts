import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpEventType,
} from '@angular/common/http';
import { AssetService } from 'src/app/services/asset.service';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements  OnInit  {
  data:any;
  id=1;
  filenames: any = [];
  uploadProgress:number;
  fileStatus = { status: '', requestType: '', percent: 0 };

  constructor(
    
    private alertCtrl: AlertController, 
    private loadingCtrl: LoadingController,
    private assetService:AssetService
    ) {

  }
  ngOnInit() {
    this.getAllasset();
  }

 
  loader;

  showLoader() {
    this.loader = this.loadingCtrl.create({
      message: 'Please wait...'
    });
    this.loader.present();
  }

  dismissLoader() {
    this.loader.dismiss();
  }
 
  onFileSelected(event:any){
    const formData = new FormData();
    for (const file of event.target.files) {
      formData.append('files', file, file.name);
    }
    this.assetService.upload(formData, this.id).subscribe(
      (event) => {
        console.log(event);
        this.resportProgress(event);
        this.getAllasset();
      }
    
      
    );
    

    
    }
    private resportProgress(httpEvent: HttpEvent<string[] | Blob>): void {
      switch (httpEvent.type) {
        case HttpEventType.UploadProgress:
          this.updateStatus(httpEvent.loaded, httpEvent.total!, 'Uploading... ');
          break;
  
        case HttpEventType.ResponseHeader:
          console.log('Header returned', httpEvent);
          break;
        case HttpEventType.Response:
          if (httpEvent.body instanceof Array) {
            this.fileStatus.status = 'done';
            for (const name of httpEvent.body) {
              this.filenames.unshift(name);
            }
          }
          this.fileStatus.status = 'done';
          break;
        default:
          console.log(httpEvent);
          break;
      }
    }
    private updateStatus(
      loaded: number,
      total: number,
      requestType: string
    ): void {
      this.fileStatus.status = 'progress';
      this.fileStatus.requestType = requestType;
      this.fileStatus.percent = Math.round((100 * loaded) / total);
    }
    getAllasset(){
    this.assetService.getAllasset().subscribe((data) => {
      console.log(data);
      
      this.data = data;
      
    });
   } 
    

  }

  

  

  


  
