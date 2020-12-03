import {Component, EventEmitter, Output, OnInit, Inject} from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentService } from '../services/content.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})
export class CreateComponentComponent implements OnInit {

  @Output() newContentEvent = new EventEmitter<Content>();
  @Output() updateContentEvent = new EventEmitter<string>();
  newContent: any;
  constructor(private contentService: ContentService, public dialog: MatDialog, private snackBar: MatSnackBar) {
    this.newContent = {
      title: '',
      imageUrl: ''
    };
  }

  ngOnInit(): void {
  }
  openAddContentDialog(): void{
    const contentDialogRef = this.dialog.open(AddContentDialog, {
      width: '400px'
    });
    contentDialogRef.afterClosed().subscribe(newContentFromDialog =>{
      this.newContent = newContentFromDialog;
      if (this.newContent.title){
        this.addContent();
      } else {
        this.snackBar.open('Please input data', 'dismiss', {duration: 3000});
      }
    });
  }
  addContent(): void{
    let newContentFromServer: Content;
    console.log('Trying to add the content to the list', this.newContent);
    this.contentService.addContent(this.newContent).subscribe(serverContent => {
      console.log('Added the content to the list', serverContent);
      newContentFromServer = serverContent;
      this.newContentEvent.emit(newContentFromServer);
    });
  }
  updateContent(): void{
    this.newContent.id = +this.newContent.id;
    console.log('Trying to update the content to the list', this.newContent);
    this.contentService.updateContent(this.newContent).subscribe(_ => {
      console.log('Content updated!');
      this.updateContentEvent.emit('content that was updated should be id: ' + this.newContent.id);
    });
  }
}

@Component({
  selector: 'app-create-component-dialog',
  templateUrl: 'create-component-dialog.component.html',
})
export class AddContentDialog {
  newContent: any;
  constructor( public dialogRef: MatDialogRef<AddContentDialog> ) {
    this.newContent = {
      title: '',
      imageUrl: ''
    };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
