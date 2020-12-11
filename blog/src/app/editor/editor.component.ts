import { Component, OnInit } from '@angular/core';
import {EditorService} from '../shared/editor.service';
import {Editor} from '../model/editor';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  listEditors: Editor[];
  editor: Editor;
  buttonval: string;
  hiddenForm: boolean;
  buttonhide: boolean;
  constructor(private service: EditorService) { }

  updateList(){
    this.service.getEditors().subscribe((data: Editor[]) => this.listEditors = data);
  }
  ngOnInit(): void {
    this.updateList();
    this.editor = new Editor();
    this.buttonhide = false;
    this.hiddenForm = true;
    this.buttonval = 'Ajouter';
  }

  save(form: NgForm) {
    if (this.buttonval === 'Ajouter'){
      this.editor.id = null;
      this.service.addEditor(this.editor).subscribe(
        () => this.updateList()
      );
      this.hiddenForm = true;
      this.buttonhide = false;
      // reset editor
      this.editor = new Editor();
      // reset form
      form.resetForm();
    }else if (this.buttonval === 'Modifier'){
      this.service.updateEditor(this.editor).subscribe(
          () => this.updateList()
        );
      this.hiddenForm = true;
      this.buttonval = 'Ajouter';
      // reset editor
      this.editor = new Editor();
      // reset form
      form.resetForm();
    }

  }
  deleteEditor(id) {
    this.service.deleteEditor(id).subscribe(
      () => this.updateList()
    );
  }
  updateEditor(id){
    this.service.getEditor(id).subscribe(
      (data: Editor) => this.editor = data
    );
    this.buttonval = 'Modifier';
    this.hiddenForm = false;
  }

}
