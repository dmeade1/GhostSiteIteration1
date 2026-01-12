# Ghost Yachts Website

Miami Beach's premier boutique yacht brokerage website.

## Setup

1. Clone this repository
2. Set up IYBA integration (see below)
3. Open `index.html` in a web server

## Running Locally

You can use any local web server. Here are some options:

### Python
```bash
python3 -m http.server 8000
```

### Node.js
```bash
npx http-server -p 8000
```

Then visit `http://localhost:8000`

## IYBA Listings Integration

The buy page (`buy.html`) integrates with IYBA (International Yacht Brokers Association) to display yacht listings.

### Configuration

1. Copy the template file:
   ```bash
   cp config.template.js config.js
   ```

2. Edit `config.js` and add your IYBA credentials:
   ```javascript
   window.IYBA_CONFIG = {
       scriptUrl: 'YOUR_IYBA_WIDGET_URL',
       apiKey: 'YOUR_API_KEY',
       brokerId: '40000283'
   };
   ```

3. **Important**: The `config.js` file is automatically excluded from git commits via `.gitignore` to protect your API credentials.

### Getting IYBA Credentials

Contact your IYBA representative or visit [IYBA.org](https://www.iyba.org) to obtain:
- Widget script URL
- API key (if required)
- Broker ID verification

## Security

- **Never commit `config.js`** - This file contains sensitive API credentials
- The `.gitignore` file is configured to exclude all sensitive files
- Always use the template file (`config.template.js`) as a reference

## Project Structure

```
GhostSite1/
├── index.html          # Main homepage
├── buy.html           # Yacht listings page (IYBA integration)
├── styles.css         # Global styles
├── script.js          # JavaScript functionality
├── images/            # Image assets
├── config.template.js # IYBA config template (safe to commit)
├── config.js          # IYBA config with credentials (DO NOT COMMIT)
└── .gitignore         # Git ignore rules
```

## Features

- Responsive design
- Hero video with autoplay
- IYBA yacht listings integration
- Astondoa partnership showcase
- Service offerings
- Contact forms

## Support

For questions about the website, contact the development team.
For IYBA integration support, contact IYBA directly.
