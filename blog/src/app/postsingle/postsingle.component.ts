import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DatePipe} from '@angular/common';
import {PostService} from '../shared/post.service';
import {CategoryService} from '../shared/category.service';
import {EditorService} from '../shared/editor.service';
import {Post} from '../model/post';
import {Editor} from '../model/editor';
import {Category} from '../model/category';

@Component({
  selector: 'app-postsingle',
  templateUrl: './postsingle.component.html',
  styleUrls: ['./postsingle.component.css']
})
export class PostsingleComponent implements OnInit {
  idPost: number;
  post: Post;
  edit: Editor;
  category: Category;
  // tslint:disable-next-line:max-line-length
  constructor(private  serviceRoute: ActivatedRoute, public datepipe: DatePipe, private service: PostService, private categoryservice: CategoryService, private editorservice: EditorService) { }

  ngOnInit(): void {
    this.edit = new Editor();
    this.category = new Category();
    this.post = new Post();
    this.idPost = this.serviceRoute.snapshot.params.id;
    this.service.getPost(this.idPost).subscribe(
      (data: Post) => {
        this.post = data;
        this.categoryservice.getCategory(this.post.idcategorie).subscribe((dataa: Category) => this.category = dataa);
        this.editorservice.getEditor(this.post.idediteur).subscribe((datab: Editor) => this.edit = datab);
      });
  }
  transformDate(date: Date){
    return this.datepipe.transform(date, 'yyyy/MM/dd').toString();
  }

}
