# Sanctum - Hytale Server Website

Welcome to the official website for **Sanctum**, an ancient Greece-themed Hytale civilization server featuring four unique empires: Empyrea, Zephyria, Pagorea, and Ashkara.

## Features

✨ **Four Unique Civilizations**
- **Empyrea** - Dark green nature realm with god-rays
- **Zephyria** - Sand-colored desert kingdom with gold sparkles
- **Pagorea** - White-blue frozen realm with falling snowflakes
- **Ashkara** - Dark red volcanic empire with floating embers

🎨 **Ancient Greece Inspired Design**
- Elegant marble background texture
- Gold, black, and minimal white color palette
- Classical serif typography
- Smooth animations and transitions

📄 **Complete Documentation**
- World lore and civilization info
- Copyright, EULA, Terms of Service
- Privacy Policy
- Server details and features

## File Structure

```
├── index.html           # Home page
├── world.html           # World/Wiki page
├── empyrea.html         # Empyrea civilization page
├── zephyria.html        # Zephyria civilization page
├── pagorea.html         # Pagorea civilization page
├── ashkara.html         # Ashkara civilization page
├── legal.html           # Legal documents
├── css/
│   ├── style.css        # Main styles & navigation
│   ├── home.css         # Home page styles
│   ├── world.css        # World page styles
│   ├── empyrea.css      # Empyrea styles + god-rays
│   ├── zephyria.css     # Zephyria styles + sparkles
│   ├── pagorea.css      # Pagorea styles + snowflakes
│   ├── ashkara.css      # Ashkara styles + embers
│   └── legal.css        # Legal page styles
├── images/              # (Your image assets)
├── fonts/               # (Your font files)
├── README.md            # This file
└── history.txt          # Conversation history with Grok

```

## Setup Instructions

### For GitHub Pages

1. **Create a GitHub Repository**
   - Go to github.com and create a new repository named `hytalesanctum.com`
   - Or name it anything you prefer

2. **Push Files to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Sanctum website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/hytalesanctum.com.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository Settings
   - Scroll to "GitHub Pages"
   - Set source to `main` branch
   - Your site will be available at `https://YOUR_USERNAME.github.io/hytalesanctum.com`

4. **Custom Domain (Optional)**
   - Purchase your domain from a registrar
   - In repository Settings > GitHub Pages, add your custom domain
   - Follow GitHub's instructions for DNS configuration
   - Your site will then be at `https://yourdomain.com`

### Local Testing

To test the website locally:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js with http-server
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## Customization

### Colors
Edit color variables in `css/style.css`:
- `--primary-gold`: Main gold accent color
- `--primary-black`: Main black color
- `--accent-white`: Light accent color
- Civilization-specific colors in their respective CSS files

### Content
All text content can be edited directly in the HTML files. Each civilization page follows the same structure:
- Header with title
- Intro section
- Features/Culture boxes
- Magic spells section
- Territory information
- Roles section
- Call-to-action button

### Animations
- **Empyrea**: God-rays animation in `css/empyrea.css`
- **Zephyria**: Gold sparkles in `css/zephyria.css`
- **Pagorea**: Snowflake effects in `css/pagorea.css`
- **Ashkara**: Ember particles in `css/ashkara.css`

## Browser Compatibility

This website works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Assets

The `images/` and `fonts/` directories are available for:
- Server icons and logos
- Civilization emblems
- Custom fonts (if desired)
- Background images or textures

## Legal

All legal documents are included:
- **Copyright Notice**: Protection of intellectual property
- **EULA**: Server usage terms and conditions
- **Terms of Service**: Player conduct standards
- **Privacy Policy**: Data handling and player privacy

These should be reviewed and customized for your specific server policies.

## Support

For website issues or improvements:
1. Check the code in the CSS files for styling adjustments
2. Ensure all HTML files are in the root directory
3. Check that the `css/` folder is in the root directory
4. Clear your browser cache when testing changes

## Future Enhancements

Potential additions:
- Server status page (uptime/player count)
- Blog or news section
- Player testimonials/screenshots gallery
- Detailed wiki pages for each civilization
- Interactive map of Orbis
- Server statistics dashboard
- Player application/whitelist form

## License

This website is part of the Sanctum Hytale server project. See `legal.html` for full copyright and usage terms.

---

**Last Updated**: January 2026

Made with ⚔️ for the Sanctum community.
