import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';
import {PostService} from '../shared/post.service';
import {CategoryService} from '../shared/category.service';
import {EditorService} from '../shared/editor.service';
import {Post} from '../model/post';
import {Editor} from '../model/editor';
import {Category} from '../model/category';

@Component({
  selector: 'app-fronthome',
  templateUrl: './fronthome.component.html',
  styleUrls: ['./fronthome.component.css']
})
export class FronthomeComponent implements OnInit {
  listPost: Post[];
  listsearch: Post[];
  post: Post;
  listEdi: Editor[];
  edit: Editor;
  listCat: Category[];
  category: Category;
  termetosearch: string;
  catidsearch: number;
  ediidsearch: number;
  default: boolean;
  serach: boolean;
  // tslint:disable-next-line:max-line-length
  constructor(public datepipe: DatePipe, private service: PostService, private categoryservice: CategoryService, private editorservice: EditorService) { }

  ngOnInit(): void {
    this.service.getPosts().subscribe((data: Post[]) => this.listPost = data);
    this.categoryservice.getCategories().subscribe((data: Category[]) => this.listCat = data);
    this.editorservice.getEditors().subscribe((data: Editor[]) => this.listEdi = data);
    this.edit = new Editor();
    this.category = new Category();
    this.post = new Post();
    this.default = false;
    this.serach = true;
    this.catidsearch = null;
    this.ediidsearch = null;
  }
  getCat(id){
    if (this.listCat !== undefined) {
      this.category = this.listCat.find(e => e.id === id);
      if (this.category !== undefined) {
        return this.category.name;
      }
    }
  }
  getEdi(id){
    if (this.listEdi !== undefined) {
      this.edit = this.listEdi.find(e => e.id === id);
      if (this.edit !== undefined) {
        return this.edit.firstname;
      }
    }
  }
  transformDate(date: Date){
    return this.datepipe.transform(date, 'yyyy/MM/dd').toString();
  }
  searchPost(){
    this.default = true;
    this.serach = false;
    this.listsearch = this.service.search(this.listPost, this.termetosearch, this.catidsearch, this.ediidsearch);
  }
  reset(){
    this.default = false;
    this.serach = true;
    this.termetosearch = null;
    this.catidsearch = null;
    this.ediidsearch = null;
  }
}
