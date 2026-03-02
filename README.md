# 💪 My Workouts

A mobile-first workout tracking PWA built with React, TypeScript, and Tailwind CSS.

## Features

- **Daily Workout Plans** - 8 structured workout routines (3 starter + 5 main)
- **Warm-up & Cool-down** - Collapsible sections with guided stretches
- **YouTube Form Videos** - Direct links to exercise demonstrations
- **Dark/Light Theme** - Persisted in localStorage
- **PWA Support** - Add to home screen, works offline
- **Swipeable Carousel** - Touch-friendly workout navigation
- **Auto Day Selection** - Shows today's workout automatically

## Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **PWA** with service worker
- **localStorage** for theme persistence

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   ├── BottomNav.tsx
│   ├── WorkoutCard.tsx
│   ├── CollapsibleSection.tsx
│   ├── ProgressTab.tsx
│   └── ProfileTab.tsx
├── data/            # Workout data
│   └── workouts.ts
├── hooks/           # Custom React hooks
│   ├── useTheme.ts
│   ├── useWorkout.ts
│   └── useTime.ts
├── types/           # TypeScript interfaces
│   └── index.ts
└── App.tsx          # Main app component
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Screenshots

The app features a clean, mobile-first design with:
- Gradient workout cards
- Smooth animations
- Bottom tab navigation
- Collapsible warm-up/cool-down sections

## License

MIT
