# ⚡️ React + Vue Microfrontend Architecture (Vite + Module Federation)

A modern micro-frontend architecture built using **React**, **Vue**, **Vite**, and **Webpack Module Federation**, showcasing seamless interoperability between multiple frontends developed in different frameworks.


Live at : https://react-mfe-hostapp-1244.netlify.app/ 
---

## 📁 Project Structure

```
react-vue-microfrontend/
├── host-app/           # Host container built with React
├── host-app-vue/       # Alternate host built with Vue
├── react-remote-app/   # Remote micro-frontend built with React
└── vue-remote-app/     # Remote micro-frontend built with Vue
```

---

## 🧭 Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Running the Apps](#running-the-apps)
- [Architecture Overview](#architecture-overview)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

---

## 🚀 Features

- ⚛️ React and Vue coexist in a unified application
- 🧩 Vite + Webpack Module Federation for dynamic module sharing
- 🧱 Built-in support for individual app development & testing
- 📁 Monorepo structure for scalability and maintainability
- 🔧 TypeScript, ESLint, Vite for a modern dev experience

---

## 📥 Installation

1. **Clone the Repository**

```bash
git clone https://github.com/diveshkswn/react-vue-microfrontend.git
cd react-vue-microfrontend
```

2. **Install Dependencies for Each App**

```bash
cd host-app && npm install
cd ../host-app-vue && npm install
cd ../react-remote-app && npm install
cd ../vue-remote-app && npm install
```

---

## 🛠 Running the Apps

> Run each app in a separate terminal, or use a process manager like `concurrently`.

### 1. Start React Remote App

```bash
cd react-remote-app
npm run dev
```

### 2. Start Vue Remote App

```bash
cd vue-remote-app
npm run dev
```

### 3. Start Host App (React)

```bash
cd host-app
npm run dev
```

### 4. Optionally, Start Host App (Vue)

```bash
cd host-app-vue
npm run dev
```

---

## 🏗 Architecture Overview

```
                ┌─────────────────────┐
                │    React Remote     │
                │  (react-remote-app) │
                └────────▲────────────┘
                         │
┌──────────────┐   ┌─────┴─────┐   ┌─────────────────────┐
│ React Host   │ ◄─┤ Module    │◄──┤    Vue Remote       │
│ (host-app)   │   │ Federation│   │  (vue-remote-app)   │
└──────────────┘   └───────────┘   └─────────────────────┘
                         ▲
                         │
                ┌────────┴─────────┐
                │ Vue Host (alt)   │
                │ (host-app-vue)   │
                └──────────────────┘
```

---

## 🔍 Usage

After running all apps, visit the following URLs:

- `http://localhost:3000/` → React Host
- `http://localhost:3001/` → React Remote
- `http://localhost:3002/` → Vue Remote
- `http://localhost:3003/` → Vue Host

> _Ports are based on Vite defaults and may vary._

Inside host apps, you’ll see remote components being dynamically loaded from the federated apps at runtime.

---

## ⚙️ Configuration

Each app has a `vite.config.ts` with `@originjs/vite-plugin-federation` set up.

Example (`react-remote-app/vite.config.ts`):

```ts
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    federation({
      name: 'reactRemote',
      filename: 'remoteEntry.js',
      exposes: {
        './Widget': './src/components/Widget.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
})
```

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to your fork
5. Open a pull request

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

## 📌 Notes

- Ensure ports don’t conflict across apps.
- Use browser devtools to verify module federation dynamic imports.
- You can mix-and-match any remote/host setup regardless of framework thanks to Webpack's decoupled design.

---

### 🙋 Need Help?

Open an issue or reach out on GitHub for questions or suggestions.
