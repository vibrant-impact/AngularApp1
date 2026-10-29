import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestStatus } from '../../models/character-profile.model';

@Component({
  selector: 'app-user-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.css']
})
export class UserStatusComponent {
  // Input received from parent
  @Input() currentStatus: QuestStatus = 'Resting at Tavern';

  // Output event to notify parent of status changes
  @Output() statusChanged = new EventEmitter<QuestStatus>();

  // Toggles the state and emits the new value
  toggleStatus(): void {
    const nextStatus: QuestStatus =
      this.currentStatus === 'Active on Quest' ? 'Resting at Tavern' : 'Active on Quest';
    this.statusChanged.emit(nextStatus);
  }
}