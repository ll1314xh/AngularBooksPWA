import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details.component';
import { MaterialModule } from '../share/material.module';

// routes
export const ROUTES: Routes = [
  { path: '', component: DetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    MaterialModule
  ],
  declarations: [DetailsComponent]
})
export class DetailsModule { }
