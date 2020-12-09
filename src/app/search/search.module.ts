import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
import { MaterialModule } from '../share/material.module';

// routes
export const ROUTES: Routes = [
  { path: '', component: SearchComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    MaterialModule
  ],
  declarations: [SearchComponent],
})
export class SearchModule { }
