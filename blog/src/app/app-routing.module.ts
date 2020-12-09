import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FronthomeComponent} from './fronthome/fronthome.component';
import {BackendComponent} from './backend/backend.component';
import {EditorComponent} from './editor/editor.component';


const routes: Routes = [
  {path: '', component: FronthomeComponent},
  {path: 'admin', component: BackendComponent},
  {path: 'admin/gestion-editors', component: EditorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
