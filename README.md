<div align="center">
  <img src="app/assets/svg/sh-logo.svg" alt="Schrödinger PomoCat Logo" width="120" height="120">
</div>

# Schrödinger PomoCat 🍅😸

A delightful Pomodoro timer application with a playful cat theme and physics-based animations, built with Nuxt.js.

## Features ✨

- **Pomodoro Timer**: Classic 25-minute work sessions with 5-minute breaks
- **Physics Animation**: Interactive Matter.js physics simulation with falling objects
- **Sound Effects**: Audio feedback for timer events
- **Responsive Design**: Works beautifully on desktop and mobile devices
- **Modern UI**: Built with Tailwind CSS and Shadcn Vue components
- **Dark/Light Mode**: Adaptive color scheme support
- **TypeScript**: Full type safety throughout the application

## Tech Stack 🛠️

This project is built with cutting-edge technologies:

- [Nuxt 3](https://nuxt.com/) - The Vue.js framework
- [Vue 3](https://vuejs.org/) - Progressive JavaScript framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Shadcn Vue](https://www.shadcn-vue.com/) - Beautiful UI components
- [Matter.js](https://brm.io/matter-js/) - Physics engine for animations
- [VueUse](https://vueuse.org/) - Essential Vue composition utilities

### Nuxt Modules Used:
- [Nuxt Icon](https://nuxt.com/modules/icon) - Icon management
- [Nuxt SVGO](https://nuxt.com/modules/nuxt-svgo) - SVG optimization
- [Nuxt Test Utils](https://github.com/nuxt/test-utils) - Testing utilities
- [Nuxt Color Mode](https://color-mode.nuxtjs.org/) - Dark/light mode
- [Nuxt Fonts](https://fonts.nuxtjs.org/) - Font optimization

## Installation 🚀

1. Clone the repository:
   ```bash
   git clone https://github.com/schroedinger-Hat/sh-pomo-cat.git
   cd sh-pomo-cat
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Usage 📖

### Timer Controls
- **Start/Pause**: Click the play/pause button to control the timer
- **Reset**: Reset the current session (only available when timer is active)
- **Skip**: Skip to the next session (work → break → work)

### Timer Sessions
- **Work Session**: 25 minutes of focused work time 🍅
- **Break Session**: 5 minutes of rest time 💆

### Physics Interaction
- Watch objects fall and interact with the physics simulation
- The animation responds to your timer completions

## Available Commands 🔧

```bash
# Development
pnpm run dev          # Start development server
pnpm run build        # Build for production
pnpm run generate     # Generate static site
pnpm run preview      # Preview production build

# Code Quality
pnpm run lint         # Run ESLint
pnpm run lint:fix     # Fix ESLint issues
pnpm run lint:scss    # Lint SCSS files

# Testing
pnpm run test         # Run tests with Vitest
```

## Configuration ⚙️

The application can be configured through environment variables:

```bash
# .env
NUXT_PUBLIC_APP_MODE=development  # development | production
```

### Customizing Timer Durations

You can modify the timer durations in `app/composables/usePomodoro.ts`:

```typescript
const POMODORO_TIME = 25 * 60 // 25 minutes in seconds
const SHORT_BREAK = 5 * 60    // 5 minutes in seconds
const LONG_BREAK = 15 * 60    // 15 minutes in seconds
const TEST_TIME = 0.05 * 60   // 3 seconds for development
```

**Development Mode**: When `NUXT_PUBLIC_APP_MODE` is set to `'development'`, the timer will default to approximately 3 seconds (0.05 minutes) for all sessions to speed up testing and development.

## Project Structure 📁

```
sh-pomo-cat/
├── app/
│   ├── components/
│   │   ├── pomodoro/          # Pomodoro-specific components
│   │   └── ui/                # Reusable UI components
│   ├── composables/           # Vue composables
│   ├── assets/               # Static assets
│   └── app.vue               # Main app component
├── public/                   # Public assets
├── server/                   # Server-side code
└── test/                     # Test files
```

## Contributing 🤝

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact 📧

Schrödinger Hat Team - [@schroedinger_hat](mailto:dev@schroedinger-hat.org)

Project Link: [Schrödinger PomoCat](https://github.com/schroedinger-Hat/sh-pomo-cat)

---

## Maintainers 👨‍💻

<div align="center">
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/Readpato">
          <img src="https://github.com/Readpato.png" width="100px" alt="Patrick Raedler"/>
          <br />
          <sub>
            <b>Patrick Raedler</b>
          </sub>
        </a>
        <br />
        <span>💻 Maintainer</span>
      </td>
    </tr>
  </table>
</div>

---

<div align="center">
  Made with ❤️ by the Schrödinger Hat Team
</div>
