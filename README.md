# Website Launcher

A clean, minimal launcher website for my projects built with Next.js.

## Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Pure CSS** - No Tailwind (uses CSS Variables)
- **Responsive Design** - Mobile-first approach

## Setup

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
app/
├── layout.tsx         # Root layout
├── page.tsx          # Homepage component
├── page.module.css   # Page styles
├── globals.css       # Global styles & CSS variables
next.config.js
tsconfig.json
package.json
```

## Deployment

This project is deployed on Railway.

### Deploy to Railway

1. Push code to GitHub
2. Connect GitHub repository to Railway
3. Set up environment variables if needed
4. Deploy!

## Customization

To add or modify projects, edit the `projects` array in `app/page.tsx`:

```typescript
const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Brief description',
    url: 'https://example.com',
    color: '#2563eb', // Accent color
  },
  // Add more projects...
];
```

## Styling

The site uses CSS Variables defined in `app/globals.css` for theming. All colors are customizable in the `:root` section.

No Tailwind = no build issues, just clean CSS.
