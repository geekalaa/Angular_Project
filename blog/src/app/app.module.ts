import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BackendComponent } from './backend/backend.component';
import { FronthomeComponent } from './fronthome/fronthome.component';
import { NavbackComponent } from './navback/navback.component';
import { NavfrontComponent } from './navfront/navfront.component';



@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    BackendComponent,
    FronthomeComponent,
    NavbackComponent,
    NavfrontComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
