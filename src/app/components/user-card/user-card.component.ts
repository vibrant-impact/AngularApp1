import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterProfile, CharacterAttributes } from '../../models/character-profile.model';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() heroData!: CharacterProfile;
  @Output() levelUpRequested = new EventEmitter<void>();
  @Output() statIncreased = new EventEmitter<keyof CharacterAttributes>();

  onLevelUp(): void {
    this.levelUpRequested.emit();
  }

  onIncreaseStat(statName: keyof CharacterAttributes): void {
    if (this.heroData.unspentSkillPoints > 0) {
      this.statIncreased.emit(statName);
    }
  }

  // Calculate health percentage for progress bar
  getHealthPercentage(): number {
    if (!this.heroData?.attributes?.maxHealthPoints) return 0;
    return Math.min(
      100,
      Math.round((this.heroData.attributes.healthPoints / this.heroData.attributes.maxHealthPoints) * 100)
    );
  }

  // Calculate mana percentage for progress bar
  getManaPercentage(): number {
    if (!this.heroData?.attributes?.maxManaPoints) return 0;
    return Math.min(
      100,
      Math.round((this.heroData.attributes.manaPoints / this.heroData.attributes.maxManaPoints) * 100)
    );
  }
}