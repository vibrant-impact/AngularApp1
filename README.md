# AngularApp1: Hero Command Deck (RPG Profile Dashboard)

An interactive character profile dashboard built with **Angular (Standalone Components)** and **TypeScript**. This project satisfies the requirements for Assignment 1, demonstrating component communication, data modeling, scoped styling, and modern UI enhancements.

---

## 🌟 Overview & Creative Twist

Instead of a standard generic profile, this application models an **Interactive RPG Hero Sheet & Command Deck**:
- **Dynamic Operational Status:** Toggles between `"Active on Quest"` and `"Resting at Tavern"`. Switching states alters the ambient status badge and updates the avatar aura/glow across components.
- **Resource Progress Bars:** Dynamic percentage meters for Health Points (HP) and Mana Points (MP) with smooth CSS transitions.
- **Leveling & Stat Allocation System:** Leveling up awards unspent stat points that can be interactively distributed across primary attributes (STR, AGI, INT, and Vitality).
- **Specialty Badges:** Dynamically rendered tags demonstrating `*ngFor` iteration.
- **Live Lore Editor:** Inline markdown/backstory editing that persists updates back to the parent state.

---

## 🏗️ Architecture & Component Interaction

The application follows Angular's **unidirectional data flow** pattern using `@Input()` properties and `@Output()` event emitters:

```
                  +-----------------------+
                  |     AppComponent      |
                  | (Master State Source) |
                  +-----------+-----------+
                              |
        +---------------------+---------------------+
        |                     |                     |
   [heroData]          [currentStatus]          [backstory]
 (levelUpRequested)    (statusChanged)       (backstoryUpdated)
 (statIncreased)              |                     |
        v                     v                     v
+------------------+ +-------------------+ +------------------+
|  UserCardComp    | |  UserStatusComp   | |   UserBioComp    |
| (Avatar, Badges, | | (Readiness Toggle | | (Lore Chronicle  |
|  Bars, & Stats)  | |   & Live Dot)     | |   Inline Editor) |
+------------------+ +-------------------+ +------------------+
```

### Components Summary

1. **`UserCardComponent` (`<app-user-card>`)**
   - **Input:** `[heroData]` (`CharacterProfile`)
   - **Outputs:** `(levelUpRequested)`, `(statIncreased)`
   - **Role:** Visualizes character identity, status-dependent border glow, animated HP/MP meters, skill badges, and attribute allocation buttons.

2. **`UserStatusComponent` (`<app-user-status>`)**
   - **Input:** `[currentStatus]` (`QuestStatus`)
   - **Output:** `(statusChanged)`
   - **Role:** Displays deployment status with animated indicator dot and provides a toggle button emitting the updated state.

3. **`UserBioComponent` (`<app-user-bio>`)**
   - **Input:** `[backstory]` (`string`)
   - **Output:** `(backstoryUpdated)`
   - **Role:** Displays character lore with an inline edit mode powered by two-way data binding (`[(ngModel)]`).

---

## 📐 Data Modeling

All data structures are strongly typed under `src/app/models/character-profile.model.ts`:

- `QuestStatus`: Union type `'Active on Quest' | 'Resting at Tavern'`
- `CharacterAttributes`: Interface modeling core resources (`healthPoints`, `maxHealthPoints`, `manaPoints`, `maxManaPoints`, `strength`, `agility`, `intelligence`)
- `CharacterProfile`: Master interface aggregating identity, attributes, badge arrays, and backstory

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.x or v20.x recommended)
- Angular CLI installed globally (`npm install -g @angular/cli`)

### Installation & Run

1. Clone the repository and navigate into the folder:
   ```bash
   git clone <your-repo-url>
   cd AngularApp1
   ```

2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

3. Launch the development server:
   ```bash
   ng serve
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:4200/
   ```

---

## 🎨 Encapsulated Styles

Each component uses isolated, scoped CSS:
- Dark glassmorphism palette (`#0d1117`, `#161b22`, `#21262d`)
- Status glows (`#238636` for Questing, `#d29922` for Tavern)
- Fluid transitions on stat bars and buttons