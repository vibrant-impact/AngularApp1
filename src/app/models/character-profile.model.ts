// Status modes for the character
export type QuestStatus = 'Active on Quest' | 'Resting at Tavern';

// Character stats interface
export interface CharacterAttributes {
  healthPoints: number;
  manaPoints: number;
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
  avatarUrl: string;
  currentStatus: QuestStatus;
  attributes: CharacterAttributes;
  characterBackstory: string;
}