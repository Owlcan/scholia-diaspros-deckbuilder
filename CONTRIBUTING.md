# Contributing to Scholia Diaspros Deckbuilder

Thank you for your interest in contributing to the Scholia Diaspros TCG Deckbuilder!

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Create a new branch** for your feature or bugfix
4. **Make your changes** and test them locally
5. **Submit a pull request** with a clear description

## Development Setup

### Using GitHub Codespaces (Recommended)
1. Click "Code" → "Create codespace on main"
2. Wait for the environment to set up
3. The app will start automatically

### Local Development
```bash
git clone https://github.com/YOUR_USERNAME/scholia-diaspros-deckbuilder.git
cd scholia-diaspros-deckbuilder
npm install
npm start
```

## Project Structure

- `index.html` - Main application file
- `TCG-cards.js` - Card database (JSON format)
- `src/assets/images/` - Card artwork
- `.devcontainer/` - Codespaces configuration
- `.github/workflows/` - GitHub Actions

## Adding New Cards

To add new cards to the database:

1. Add card images to `src/assets/images/expeditionandgames/TCG Images/`
2. Add card data to `TCG-cards.js` following the existing format:

```javascript
{
  id: 'unique_card_id',
  name: "Card Name",
  type: "Monster Card", // or "Student Card", "Spell Card", etc.
  race: "Race Name", // optional
  tier: "Minion", // Minion, Utility, Medium, Strong, Boss, Legendary
  cost: "1 Universal", // energy cost
  hp: 2, // health points
  atk: 1, // attack points
  ability: {
    name: "Ability Name",
    description: "Ability description"
  },
  image_url: "src/assets/images/expeditionandgames/TCG Images/cardname.webp"
}
```

## Art Variants

The system automatically detects art variants:
- Base: `cardname.webp`
- Variants: `cardname (1).webp`, `cardname (2).webp`, etc.

## Code Style

- Use consistent indentation (2 spaces)
- Comment complex functions
- Keep functions small and focused
- Use descriptive variable names

## Testing

Before submitting:
1. Test the card database loads correctly
2. Test filtering and searching works
3. Test deck building functionality
4. Test on both desktop and mobile
5. Verify images load properly

## Submitting Changes

1. Make sure your code follows the existing style
2. Test thoroughly
3. Write a clear commit message
4. Submit a pull request with:
   - Clear description of changes
   - Screenshots if visual changes
   - Test results

## Reporting Issues

Use GitHub Issues to report:
- Bugs in functionality
- Missing or broken images
- Performance problems
- Feature requests

Include:
- Browser and version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if helpful

## Questions?

Feel free to open an issue for questions about contributing!
