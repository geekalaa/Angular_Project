import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BackendComponent } from './backend/backend.component';
import { FronthomeComponent } from './fronthome/fronthome.component';
import { NavbackComponent } from './navback/navback.component';
import { NavfrontComponent } from './navfront/navfront.component';
import { CategoryComponent } from './category/category.component';
import { PostComponent } from './post/post.component';
import {DatePipe} from '@angular/common';
import {FileSelectDirective, FileUploadModule} from 'ng2-file-upload';
import { PostsingleComponent } from './postsingle/postsingle.component';
import { Notfound404Component } from './notfound404/notfound404.component';
import { VuesComponent } from './vues/vues.component';



@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    BackendComponent,
    FronthomeComponent,
    NavbackComponent,
    NavfrontComponent,
    CategoryComponent,
    PostComponent,
    PostsingleComponent,
    Notfound404Component,
    VuesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
  ],
  providers: [DatePipe, FileSelectDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
