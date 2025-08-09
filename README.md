# Scholia Diaspros TCG Deckbuilder

A comprehensive web-based card database and deck builder for the Scholia Diaspros Trading Card Game. Features a medieval fantasy theme with diaper discipline elements.

## 🎴 Features

- **Card Database**: Browse over 200+ unique cards including Monsters, Students, Spells, Items, Artifacts, and Boosters
- **Advanced Filtering**: Filter by type, tier, energy cost, and search by name or abilities
- **Deck Builder**: Create and manage decks with validation (55-card limit, copy restrictions)
- **Art Variants**: Many cards feature multiple art variants that can be cycled through
- **Export Functions**: Export deck lists and individual cards as PNG images
- **Responsive Design**: Works on desktop and mobile devices

## 🚀 Quick Start

### GitHub Codespaces (Recommended)
1. Click the "Code" button on GitHub
2. Select "Create codespace on main"
3. Wait for the environment to set up
4. The app will automatically start and be available in the browser

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/scholia-diaspros-deckbuilder.git
   cd scholia-diaspros-deckbuilder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser to `http://localhost:3000`

### Direct File Access
You can also simply open `index.html` in any modern web browser.

## 🃏 Card Types

- **Monster Cards**: Creatures from the dark dimensions and various races
- **Student Cards**: Academy students from different species (Foxfolk, Cowbuddies, Crinklehearts, etc.)
- **Spell Cards**: Magic effects and instant spells
- **Item/Artifact Cards**: Equipment and magical items
- **Booster Cards**: Energy generation cards (Universal, Pyro, Cryo, Hydro, Geo, Shadergy)
- **Patron Cards**: Powerful deity cards
- **Environment Cards**: Location-based effects

## 🎮 How to Use

### Browsing Cards
- Use the search bar to find specific cards
- Filter by type, tier, or energy type
- Click any card to view detailed information and larger art

### Building Decks
1. Click "Show Deck" to open the deck builder
2. Use the ➕ button next to any card to add it to your deck
3. Maximum 55 cards per deck, maximum 3 copies of any single card
4. View deck statistics and guidelines in the deck panel
5. Save/load decks using the provided buttons

### Art Variants
- Many cards have multiple art pieces
- Use the ‹ › buttons on card images to cycle through variants
- Each card instance can show different art independently

## 🖼️ Card Art System

The app automatically detects art variants using this naming convention:
- Base art: `cardname.webp`
- Variants: `cardname (1).webp`, `cardname (2).webp`, etc.

## 🛠️ Technical Details

- **Frontend**: Vanilla HTML5, CSS3, JavaScript
- **Dependencies**: JSZip (for exports), Google Fonts
- **Images**: WebP format for optimal performance
- **Storage**: LocalStorage for deck persistence

## 📁 Project Structure

```
/
├── index.html              # Main application file
├── TCG-cards.js           # Card database
├── src/
│   └── assets/
│       └── images/
│           └── expeditionandgames/
│               └── TCG Images/    # All card artwork
├── package.json           # Dependencies and scripts
├── .devcontainer/         # Codespaces configuration
└── README.md             # This file
```

## 🚀 Deployment

### GitHub Pages
This project is configured for automatic GitHub Pages deployment:
1. Push changes to the main branch
2. GitHub Actions will automatically deploy to Pages
3. Access your live site at `https://YOUR_USERNAME.github.io/scholia-diaspros-deckbuilder/`

### Manual Deployment
Since this is a static site, you can deploy it to any web hosting service by uploading the files.

## 🎨 Game Lore

Scholia Diaspros is a fantasy TCG set in a magical academy where students learn alongside various creatures and entities. The game features:

- **Energy System**: Six types of energy (Universal, Pyro, Cryo, Hydro, Geo, Shadergy)
- **Creature Races**: From cute Foxfolk and Cowbuddies to terrifying Darklings
- **Academy Setting**: A school where discipline and magic intertwine
- **Diaper Discipline Theme**: A unique ABDL-friendly fantasy setting

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📜 License

This project is for personal/educational use. Card art and game content belong to their respective creators.

## 🏷️ Version

Current Version: 2.1
- Enhanced art cycling system
- Improved deck builder
- Mobile responsive design
- PNG export functionality
