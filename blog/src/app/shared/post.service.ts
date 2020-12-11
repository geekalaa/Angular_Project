import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'http://localhost:3000/post';
  constructor(private http: HttpClient) { }

  // get all Post
  getPosts() {
    return this.http.get<Post[]>(this.url);
  }
  // add Post
  addPost(p: Post) {
    return this.http.post(this.url + '/add', p);
  }
  // Get Post By id
  getPost(id) {
    return this.http.get(this.url + '/' + id);
  }
  // delete Post By id
  deletePost(id) {
    return this.http.delete(this.url + '/delete/' + id);
  }
  // Update Post
  updatePost(p: Post) {
    const id = p.id;
    return this.http.put(this.url + '/update/' + id , p);
  }
}
