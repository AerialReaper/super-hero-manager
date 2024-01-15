import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-hero-dialog',
  templateUrl: './delete-hero-dialog.component.html',
  styleUrl: './delete-hero-dialog.component.css'
})
export class DeleteHeroDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteHeroDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
