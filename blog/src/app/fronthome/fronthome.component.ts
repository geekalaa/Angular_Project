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
  post: Post;
  listEdi: Editor[];
  edit: Editor;
  listCat: Category[];
  category: Category;
  // tslint:disable-next-line:max-line-length
  constructor(public datepipe: DatePipe, private service: PostService, private categoryservice: CategoryService, private editorservice: EditorService) { }

  ngOnInit(): void {
    this.service.getPosts().subscribe((data: Post[]) => this.listPost = data);
    this.categoryservice.getCategories().subscribe((data: Category[]) => this.listCat = data);
    this.editorservice.getEditors().subscribe((data: Editor[]) => this.listEdi = data);
    this.edit = new Editor();
    this.category = new Category();
    this.post = new Post();
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
