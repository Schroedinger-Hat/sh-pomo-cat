# Changelog


## v1.0.0

[compare changes](https://github.com/Schroedinger-Hat/sh-pomo-cat/compare/44aa91f...v1.0.0)

### 🚀 Enhancements

- **app.vue:** Add initial functionality for pomodoro ([031ec94](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/031ec94))
- **composables/usePomodoro:** Create composable for pomodoro ([4e3d6ff](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/4e3d6ff))
- **nuxt.config & tailwindcss:** Add nuxt fonts, use lexend as main font ([cb51af5](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/cb51af5))
- **app.vue:** Add card with schroddy ([058f98e](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/058f98e))
- **PhysicsTest:** Add basic matter js config and render it ([8b524e1](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/8b524e1))
- **PhysicsTest:** Save state ([fa9eb53](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/fa9eb53))
- **PhysicsTest:** Add matter js ([4dd6fdf](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/4dd6fdf))
- **useSound:** Implement simple sound to notify timer finished ([c734a8d](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/c734a8d))
- **app.vue:** Add seo and head, modify list elements on mobile ([1a04eb0](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/1a04eb0))
- **components/BaseIcon:** Implement BaseIcon component ([7114578](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/7114578))
- **components/pomodoro/Button:** Create button for the pomodoro countdown ([2f731d4](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/2f731d4))
- **components/pomodoro/Stats:** Extract stats, create and simplify component ([c59776c](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/c59776c))
- **components/pomodoro/Countdown:** Extract component, restructure with others ([a7f6ef6](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/a7f6ef6))
- **components/app/Header:** Create header component for whole app ([9a88b93](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/9a88b93))
- Handle accessibility issues ([ac08f96](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/ac08f96))

### 🩹 Fixes

- **app.vue:** Add proper icon name ([766b29e](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/766b29e))
- **components/PomodoroButton:** Remove recursivness ([a5c2f18](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/a5c2f18))

### 💅 Refactors

- **app.vue:** Utilize composable ([b89b506](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/b89b506))
- **app.vue:** Implement structure to app ([624f889](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/624f889))
- **CtaColorMode:** Remove client suffix as ssr is disabled ([604f99c](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/604f99c))
- **PhysicsTest:** Add body when completion goes up ([d7331f5](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/d7331f5))
- **usePomodoro:** Implement logic of long and short breaks ([d55e071](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/d55e071))
- **app.vue:** Put everything inside shadcn card, modify grid and display stats ([1e84215](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/1e84215))
- **usePomodoro:** Reset pomos after long break finishes ([4e0e232](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/4e0e232))
- **app.vue:** Add badge to notify current state and make reset work properly ([6f2323c](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/6f2323c))
- **app.vue:** Allow draggin over timer with physics elements ([232216e](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/232216e))
- **PhysicsTest:** Implement mouse interaction ([16d342a](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/16d342a))
- **MatterPhysics:** Rename component to proper name ([0456885](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/0456885))
- **nuxt.config:** Add public key to verify if it's dev or not ([ae90842](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/ae90842))
- **usePomodoro:** Execute runtimeConfig inside composable ([ff5b8ea](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/ff5b8ea))
- **usePomodoro:** Remove resetting of currentCycle on shortbreak ([343f0d0](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/343f0d0))
- **composables/usePomodoro:** Restructure composable, remove deep if nested ([002785c](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/002785c))
- **compoasbles/usePomodoro:** Implement setTimer function ([9d777e2](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/9d777e2))
- **app:** Implement BaseIcon wherever possible ([d8014de](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/d8014de))
- **app:** Lintfix with new rules, simplify app.vue component ([346f99a](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/346f99a))
- **app:** Simplify app.vue component, implement new components ([710177e](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/710177e))
- **components/PomodoroButton:** Add icon ([abe750e](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/abe750e))
- **app:** Simplify component, implement better styling ([57d62e3](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/57d62e3))
- **components/PomodoroCountdown:** Add emojis to state, add text-black for contrast to button ([3d7e772](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/3d7e772))

### 📖 Documentation

- **LICENSE:** Add GNU Affero v3 ([ff9edbc](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/ff9edbc))
- **README:** Update readme ([1a8e917](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/1a8e917))

### 🏡 Chore

- Remove shadcn prefix for components ([6fc290b](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/6fc290b))
- **assets:** Add schroddy ([45ed448](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/45ed448))
- Add matter-js ([b47dbdf](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/b47dbdf))
- **app.vue:** Delete unnecesary ref ([1c6107d](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/1c6107d))
- **nuxt.config:** Disable ssr ([ae0d2df](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/ae0d2df))
- **.github:** Add autofix CICD ([ecae07a](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/ecae07a))
- Update ci ([eea7c3f](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/eea7c3f))
- Add corepack ([38ef128](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/38ef128))
- Update ci ([305e955](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/305e955))
- Apply automated updates ([5ace7ef](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/5ace7ef))
- **.github:** Add sync fork ([8707854](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/8707854))
- **.github:** Fix typo ([23e67d9](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/23e67d9))
- **env.example:** Add env example ([1fe17ea](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/1fe17ea))
- Lint fix ([10cb582](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/10cb582))
- **eslint.config:** Modify eslint configuration ([a0c9dba](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/a0c9dba))
- **components/MatterPhysics:** Remove comment ([dec8146](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/dec8146))

### 🎨 Styles

- **components/CtaColorMode:** Add cursor pointer ([c24d091](https://github.com/Schroedinger-Hat/sh-pomo-cat/commit/c24d091))

### ❤️ Contributors

- Patrick Raedler <patrick.raedler@schroedinger-hat.org>

