# Salla Custom Theme

A custom Salla theme built with the Twilight framework.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or pnpm
- Salla CLI
- Salla Partner Account

### Installation

1. Clone or download this repository
2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Preview the theme:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

### Building

To build the theme for production:

```bash
npm run build
# or
pnpm build
```

## Theme Structure

```
src/
├── assets/
│   ├── images/
│   ├── js/
│   └── styles/
├── locales/
│   ├── ar.json
│   └── en.json
└── views/
    ├── components/
    │   ├── footer/
    │   ├── header/
    │   ├── home/
    │   └── product/
    ├── layouts/
    │   └── master.twig
    └── pages/
        ├── blog/
        ├── brands/
        ├── customer/
        ├── product/
        ├── cart.twig
        ├── index.twig
        └── ...
```

## Configuration

Edit `twilight.json` to configure your theme settings, features, and components.

## Support

For more information, visit [Salla Documentation](https://docs.salla.dev/)
