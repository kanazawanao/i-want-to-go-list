import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  uploadPercent?: Observable<number | undefined>;
  downloadURL?: Observable<string>;
  constructor(private storage: AngularFireStorage) {}

  ngOnInit() {}

  uploadFile(event: any) {
    const file = event.target.files[0];
    const filePath = '';
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file.name);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = fileRef.getDownloadURL() )
     )
    .subscribe();
  }
}
