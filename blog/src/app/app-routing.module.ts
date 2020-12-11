import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FronthomeComponent} from './fronthome/fronthome.component';
import {BackendComponent} from './backend/backend.component';
import {EditorComponent} from './editor/editor.component';
import {CategoryComponent} from './category/category.component';
import {PostComponent} from './post/post.component';


const routes: Routes = [
  {path: '', component: FronthomeComponent},
  {path: 'admin', component: BackendComponent},
  {path: 'admin/gestion-editors', component: EditorComponent},
  {path: 'admin/gestion-category', component: CategoryComponent},
  {path: 'admin/gestion-post', component: PostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
