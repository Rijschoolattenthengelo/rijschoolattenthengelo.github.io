# Rijschool Attent Website

This is the website for Rijschool Attent, built with Eleventy and the Start Bootstrap Agency theme.

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone this repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
npm install
```

## Development

To start the development server:
```bash
npm start
```

This will start a local server at `http://localhost:8080`

## Build

To build the site for production:
```bash
npm run build
```

The built site will be in the `_site` directory.

## Project Structure

- `src/`: Source files
  - `_includes/`: Partial templates
  - `_layouts/`: Layout templates
  - `assets/`: Static assets
  - `css/`: Stylesheets
  - `js/`: JavaScript files
- `_site/`: Built site (generated)
- `.eleventy.js`: Eleventy configuration
- `package.json`: Project dependencies and scripts 