import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardFormComponent } from './card-form/card-form.component';
import { FormsModule } from '@angular/forms';
import { CollectionsComponent } from './collections/collections.component';
import { CollectionComponent } from './collection/collection.component';
import { MainComponent } from './main/main.component';
import { CollectionFormComponent } from './collection-form/collection-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardFormComponent,
    CollectionsComponent,
    CollectionComponent,
    MainComponent,
    CollectionFormComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
