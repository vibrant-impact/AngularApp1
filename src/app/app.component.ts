import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CharacterProfile, QuestStatus, CharacterAttributes } from './models/character-profile.model';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserStatusComponent } from './components/user-status/user-status.component';
import { UserBioComponent } from './components/user-bio/user-bio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    UserCardComponent,
    UserStatusComponent,
    UserBioComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp1';

  // Master hero state
  heroCharacter: CharacterProfile = {
    characterId: 'char-001',
    characterName: 'Kaelen Shadowmend',
    characterClass: 'Arcane Technomancer',
    characterLevel: 28,
    unspentSkillPoints: 3,
    avatarUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=400&q=80',
    currentStatus: 'Active on Quest',
    specialtyBadges: ['TypeScript', 'Angular 19', 'Runic Hex', 'Full-Stack Magic'],
    attributes: {
      healthPoints: 720,
      maxHealthPoints: 900,
      manaPoints: 980,
      maxManaPoints: 1200,
      strength: 42,
      agility: 68,
      intelligence: 94
    },
    characterBackstory: 'A rogue scholar who synthesizes ancient runic matrices with reactive frontend interfaces to protect the borderlands from digital entropy.'
  };

  // Status toggle handler
  handleStatusUpdate(newStatus: QuestStatus): void {
    this.heroCharacter.currentStatus = newStatus;
  }

  // Backstory edit handler
  handleBackstoryUpdate(newBackstory: string): void {
    this.heroCharacter.characterBackstory = newBackstory;
  }

  // Level up handler
  handleLevelUp(): void {
    this.heroCharacter.characterLevel += 1;
    this.heroCharacter.unspentSkillPoints += 2;
    // Boost maximums slightly on level up
    this.heroCharacter.attributes.maxHealthPoints += 50;
    this.heroCharacter.attributes.maxManaPoints += 50;
  }

  // Stat point allocation handler
  handleStatIncrease(statKey: keyof CharacterAttributes): void {
    if (this.heroCharacter.unspentSkillPoints > 0) {
      if (statKey === 'healthPoints') {
        this.heroCharacter.attributes.healthPoints = Math.min(
          this.heroCharacter.attributes.healthPoints + 30,
          this.heroCharacter.attributes.maxHealthPoints
        );
      } else if (statKey === 'manaPoints') {
        this.heroCharacter.attributes.manaPoints = Math.min(
          this.heroCharacter.attributes.manaPoints + 30,
          this.heroCharacter.attributes.maxManaPoints
        );
      } else {
        this.heroCharacter.attributes[statKey] += 1;
      }
      this.heroCharacter.unspentSkillPoints -= 1;
    }
  }
}