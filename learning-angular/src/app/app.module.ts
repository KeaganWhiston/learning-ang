import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { TagFilterPipe } from './tag-filter.pipe';
import {FormsModule} from '@angular/forms';
import { HoverStyleDirective } from './hover-style.directive';
<<<<<<< Updated upstream
import { CreateContentComponent } from './create-content/create-content.component';
=======
import { MessagesComponent } from './messages/messages.component'
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService} from './services/in-memory-data.service';
import {AddContentDialog, CreateComponentComponent} from './create-component/create-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    TagFilterPipe,
    HoverStyleDirective,
<<<<<<< Updated upstream
    CreateContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
=======
    MessagesComponent,
    CreateComponentComponent,
    AddContentDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false,
        delay: 1000 }),
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatDividerModule,
    MatDialogModule
>>>>>>> Stashed changes
  ],
  providers: [],
  entryComponents: [AddContentDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
