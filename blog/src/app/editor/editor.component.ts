import { Component, OnInit } from '@angular/core';
import {EditorService} from '../shared/editor.service';
import {Editor} from '../model/editor';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  listEditors: Editor[];
  editor: Editor;
  buttonval: string;
  constructor(private service: EditorService) { }

  ngOnInit(): void {
    this.service.getEditors().subscribe((data: Editor[]) => this.listEditors = data);
    this.editor = new Editor();
    this.buttonval = 'Ajouter';
  }

  save() {
    this.editor.id = null;
    this.service.addEditor(this.editor).subscribe(
        () => this.listEditors = [this.editor, ...this.listEditors]
      );
  }

}
