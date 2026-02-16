# Dark Mode Toggle Feature

A React application demonstrating a fully functional dark mode toggle feature with accessibility compliance and smooth user experience.

## Features

- ✅ Toggle switch in the top-right corner of the header
- ✅ Sun/Moon icon indicating current theme
- ✅ Theme preference saved to local storage
- ✅ Smooth transitions (0.3s ease-in-out)
- ✅ Keyboard navigable (Tab + Enter/Space)
- ✅ Screen reader support (ARIA labels)
- ✅ WCAG contrast ratio compliance (4.5:1 minimum)
- ✅ Cross-browser compatible

## Tech Stack

- React 18.2.0 (functional components)
- Vite (build tool)
- CSS with CSS Variables for theming
- Context API for state management

## Installation

1. Clone the repository:
```bash
git clone https://github.com/YanArad/avshalom_lab2_project.git
cd avshalom_lab2_project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
avshalom_lab2_project/
├── src/
│   ├── components/
│   │   ├── DarkModeToggle.jsx
│   │   └── DarkModeToggle.css
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Accessibility Features

- **Keyboard Navigation**: The toggle is fully keyboard accessible using Tab to focus and Enter/Space to activate
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Contrast Ratio**: All text meets WCAG AA standards (4.5:1 minimum)
- **Focus Indicators**: Clear visual focus indicators for keyboard navigation

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## User Flow

1. User clicks the toggle switch in the top-right corner
2. Theme switches between light and dark mode
3. Preference is automatically saved to local storage
4. Theme persists across page reloads

## License

MIT
