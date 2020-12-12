import { Component, OnInit } from '@angular/core';
import {PostService} from '../shared/post.service';
import {Post} from '../model/post';
import {NgForm} from '@angular/forms';
import {CategoryService} from '../shared/category.service';
import {Category} from '../model/category';
import {EditorService} from '../shared/editor.service';
import {Editor} from '../model/editor';
import {DatePipe} from '@angular/common';
import {FileUploader} from 'ng2-file-upload';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({
    url: 'http://localhost:3000/upload',
    itemAlias: 'image'
  });
  fileToUpload: File = null;
  listPost: Post[];
  post: Post;
  listEdi: Editor[];
  edit: Editor;
  listCat: Category[];
  category: Category;
  buttonval: string;
  hiddenForm: boolean;
  buttonhide: boolean;
  previous_image: string;
  // tslint:disable-next-line:max-line-length
  constructor(public datepipe: DatePipe, private service: PostService, private categoryservice: CategoryService, private editorservice: EditorService) {

  }

  updateList(){
    this.service.getPosts().subscribe((data: Post[]) => this.listPost = data);
  }
  ngOnInit(): void {
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
      this.post.image = file._file.name;
      this.uploader.uploadAll();
    };
    this.uploader.onCompleteItem = (item: any, status: any) => {
      console.log('Uploaded File Details:', item);
    };
    this.categoryservice.getCategories().subscribe((data: Category[]) => this.listCat = data);
    this.editorservice.getEditors().subscribe((data: Editor[]) => this.listEdi = data);
    this.updateList();
    this.edit = new Editor();
    this.category = new Category();
    this.post = new Post();
    this.buttonhide = false;
    this.hiddenForm = true;
    this.buttonval = 'Ajouter';
  }
  save(form: NgForm) {
    if (this.buttonval === 'Ajouter'){
      // console.log(this.post);
      this.post.id = null;
      this.post.date = new Date();
      this.post.nbre_vue = 0;
      this.service.addPost(this.post).subscribe(
        () => this.updateList()
      );
      this.hiddenForm = true;
      this.buttonhide = false;
      // reset editor
      this.post = new Post();
      // reset form
      form.resetForm();
    }else if (this.buttonval === 'Modifier'){
      console.log(this.post);
      if (this.post.image == null){
        this.post.image = this.previous_image;
      }
      this.service.updatePost(this.post).subscribe(
        () => this.updateList()
      );
      this.hiddenForm = true;
      this.buttonval = 'Ajouter';
      // reset editor
      this.post = new Post();
      // reset form
      form.resetForm();
    }

  }
  deletePost(id) {
    this.service.deletePost(id).subscribe(
      () => this.updateList()
    );
  }
  updatePost(id){
    this.service.getPost(id).subscribe(
      (data: Post) => {
        this.post.id = data.id;
        this.post.title = data.title;
        this.post.contenu = data.contenu;
        this.post.idediteur = data.idediteur;
        this.post.date = data.date;
        this.post.idcategorie = data.idcategorie;
        this.post.nbre_vue = data.nbre_vue;
        this.previous_image = data.image;
      });
    this.buttonval = 'Modifier';
    this.hiddenForm = false;
  }
  getCat(id){
  this.category = this.listCat.find(e => e.id === id);
  if (this.category !== undefined) {
  return this.category.name;
  }
  }
  getEdi(id){
    this.edit = this.listEdi.find(e => e.id === id);
    if (this.edit !== undefined) {
      return this.edit.firstname;
    }
  }
  transformDate(date: Date){
    return this.datepipe.transform(date, 'yyyy/MM/dd').toString();
  }

}
