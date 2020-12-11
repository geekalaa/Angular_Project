import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../model/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = 'http://localhost:3000/categorie';
  constructor(private http: HttpClient) { }

// get all Category
  getCategories() {
    return this.http.get<Category[]>(this.url);
  }
  // add Category
  addCategory(c: Category) {
    return this.http.post(this.url + '/add', c);
  }
  // Get Category By id
  getCategory(id) {
    return this.http.get(this.url + '/' + id);
  }
  // delete Category By id
  deleteCategory(id) {
    return this.http.delete(this.url + '/delete/' + id);
  }
  // Update Category
  updateCategory(c: Category) {
    const id = c.id;
    return this.http.put(this.url + '/update/' + id , c);
  }

}
