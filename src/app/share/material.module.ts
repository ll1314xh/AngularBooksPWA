import { NgModule } from '@angular/core';
import { MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatDividerModule,
  MatProgressSpinnerModule } from '@angular/material';
@NgModule({
    imports: [
      MatToolbarModule,
      MatMenuModule,
      MatIconModule,
      MatCardModule,
      MatButtonModule,
      MatTableModule,
      MatDividerModule,
      MatProgressSpinnerModule
    ],
    exports: [MatToolbarModule,
      MatMenuModule,
      MatIconModule,
      MatCardModule,
      MatButtonModule,
      MatTableModule,
      MatDividerModule,
      MatProgressSpinnerModule]
  })
  export class MaterialModule { }

