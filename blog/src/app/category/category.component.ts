import { Component, OnInit } from '@angular/core';
import {Category} from '../model/category';
import {CategoryService} from '../shared/category.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  addForm: FormGroup;
  listCategory: Category[];
  category: Category;
  buttonval: string;
  hiddenForm: boolean;
  buttonhide: boolean;
  constructor(private service: CategoryService) { }

  ngOnInit(): void {
    this.category = new Category();
    this.addForm = new FormGroup({name: new FormControl('', [Validators.required, Validators.minLength(3)]), });
    this.updateList();
    this.buttonhide = false;
    this.hiddenForm = true;
    this.buttonval = 'Ajouter';
  }

  updateList(){
    this.service.getCategories().subscribe((data: Category[]) => this.listCategory = data);
  }
  deleteCategory(id) {
    this.service.deleteCategory(id).subscribe(
      () => this.updateList()
    );
  }
  updateCategory(id){
    this.service.getCategory(id).subscribe(
      (data: Category) => this.afterupdate(data ,id)
    );
  }

  onSubmit(){
    if (this.buttonval === 'Ajouter'){
      this.category.id = null;
      this.category.name = this.addForm.value.name;
      if (this.category.name != undefined){
      this.service.addCategory(this.category).subscribe(
        () => this.updateList()
      );
      }
      this.hiddenForm = true;
      this.buttonhide = false;
      // reset editor
      this.category = new Category();
      // reset form
      this.addForm.reset();
    }else if (this.buttonval === 'Modifier'){
      this.category.name = this.addForm.value.name;
      this.service.updateCategory(this.category).subscribe(
        () => this.updateList()
      );
      this.hiddenForm = true;
      this.buttonval = 'Ajouter';
      // reset editor
      this.category = new Category();
      // reset form
      this.addForm.reset();
    }
  }
  reset(){
    this.addForm.reset();
  }
  afterupdate(data, id){
    this.category.id = data.id;
    this.category.name = data.name;
    this.buttonval = 'Modifier';
    this.hiddenForm = false;
    this.addForm.patchValue({ name: this.category.name });
  }
}
