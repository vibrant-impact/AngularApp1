import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterProfile, QuestStatus } from './models/character-profile.model';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserStatusComponent } from './components/user-status/user-status.component';
import { UserBioComponent } from './components/user-bio/user-bio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, // <-- Add this here
    UserCardComponent,
    UserStatusComponent,
    UserBioComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp1';

  // Master character state
  heroCharacter: CharacterProfile = {
    characterId: 'char-001',
    characterName: 'Kaelen Shadowmend',
    characterClass: 'Arcane Technomancer',
    characterLevel: 28,
    avatarUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=400&q=80',
    currentStatus: 'Active on Quest',
    attributes: {
      healthPoints: 840,
      manaPoints: 1250,
      strength: 42,
      agility: 68,
      intelligence: 94
    },
    characterBackstory: 'A rogue scholar who synthesizes ancient runic matrices with reactive frontend interfaces to protect the borderlands from digital entropy.'
  };

  // Handler for status toggling emitted by UserStatusComponent
  handleStatusUpdate(newStatus: QuestStatus): void {
    this.heroCharacter.currentStatus = newStatus;
  }

  // Handler for lore updates emitted by UserBioComponent
  handleBackstoryUpdate(newBackstory: string): void {
    this.heroCharacter.characterBackstory = newBackstory;
  }
}