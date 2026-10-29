import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterProfile } from '../../models/character-profile.model';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  // Input property to receive hero data from parent
  @Input() heroData!: CharacterProfile;
}