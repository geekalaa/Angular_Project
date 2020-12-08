import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Editor} from '../model/editor';

@Injectable({
  providedIn: 'root'
})
export class EditorService {
  url = 'http://localhost:3000/editor';
  constructor(private http: HttpClient) {}
  // get all Editors
  getEditors() {
    return this.http.get<Editor[]>(this.url);
  }
  // add Editor
  addEditor(e: Editor) {
    return this.http.post(this.url + '/add', e);
  }
  // Get Editor By id
  getEditor(id) {
    return this.http.get(this.url + '/' + id);
  }
  // delete Editor By id
  deleteEditor(id) {
    return this.http.delete(this.url + '/delete/' + id);
  }
  // Update Editor
  updateEditor(e: Editor) {
    const id = e.id;
    return this.http.put(this.url + '/update/' + id , e);
  }
}
