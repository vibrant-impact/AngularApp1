import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-bio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-bio.component.html',
  styleUrls: ['./user-bio.component.css']
})
export class UserBioComponent {
  @Input() backstory: string = '';
  @Output() backstoryUpdated = new EventEmitter<string>();

  isEditing: boolean = false;
  editableContent: string = '';

  enableEditing(): void {
    this.editableContent = this.backstory;
    this.isEditing = true;
  }

  saveChanges(): void {
    this.isEditing = false;
    this.backstoryUpdated.emit(this.editableContent);
  }

  cancelEditing(): void {
    this.isEditing = false;
    this.editableContent = '';
  }
}