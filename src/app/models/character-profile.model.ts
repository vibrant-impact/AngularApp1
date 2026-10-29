// Status modes for the character
export type QuestStatus = 'Active on Quest' | 'Resting at Tavern';

// Character stats interface
export interface CharacterAttributes {
  healthPoints: number;
  maxHealthPoints: number;
  manaPoints: number;
  maxManaPoints: number;
  strength: number;
  agility: number;
  intelligence: number;
}

// Master interface representing the hero sheet
export interface CharacterProfile {
  characterId: string;
  characterName: string;
  characterClass: string;
  characterLevel: number;
  unspentSkillPoints: number;
  avatarUrl: string;
  currentStatus: QuestStatus;
  specialtyBadges: string[];
  attributes: CharacterAttributes;
  characterBackstory: string;
}