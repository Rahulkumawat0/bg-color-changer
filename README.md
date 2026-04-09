# 🎨 Background Color Changer

A beautiful and interactive web application that lets you change the background color instantly. Built with React and Vite for a fast, responsive user experience.

## ✨ Features

- **Instant Color Changes**: Click any color button to change the background instantly
- **Smooth Transitions**: Beautiful 500ms color transition effects
- **10 Vibrant Colors**: Red, Green, Blue, Yellow, Dark, Orange, Purple, Cyan, Pink, Lime
- **Floating Palette**: Fixed color palette at the bottom of the screen with modern glassmorphism design
- **Responsive Design**: Works perfectly on all device sizes
- **Lightweight & Fast**: Built with Vite for optimal performance

## 🎯 Color Palette

- 🔴 Red (#ef4444)
- 🟢 Green (#22c55e)
- 🔵 Blue (#3b82f6)
- 🟡 Yellow (#eab308)
- ⚫ Dark (#0f172a)
- 🟠 Orange (#f97316)
- 🟣 Purple (#a855f7)
- 🩵 Cyan (#06b6d4)
- 🩷 Pink (#ec4899)
- 🟢 Lime (#84cc16)

## 🚀 Live Demo

[View on Vercel](https://bg-changer.vercel.app/) *(Update with your actual Vercel URL)*

## 📋 Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS 4
- **Language**: JavaScript (ES6+)
- **Package Manager**: npm

## 🛠️ Installation

### Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/bg-color-changer.git
   cd bg-color-changer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173`

## 📦 Available Scripts

### Development
```bash
npm run dev          # Start Vite development server
```

### Production Build
```bash
npm run build        # Create optimized production build
npm run preview      # Preview production build
```

### Code Quality
```bash
npm run lint         # Run ESLint to check code quality
```

## 📖 How to Use

1. **View the full-screen background** with the initial color (red)
2. **Click any color button** in the floating palette at the bottom
3. **Watch the background smoothly transition** to the selected color
4. **Repeat** to create your desired color scheme

## 🎨 Components

### App.jsx
Main component that manages the color state and renders the color palette buttons.

### BgChangerButton.jsx
Reusable button component for each color with click handlers and styling.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: BG color changer app"
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Vercel auto-detects Vite configuration
   - Click "Deploy"

3. **Your app is live!**

### Deploy to Another Platform

The app can also be deployed to:
- **Netlify**: Connect GitHub repo → Deploy
- **GitHub Pages**: Build locally, push to `gh-pages` branch
- **Any static hosting**: Run `npm run build` and serve the `dist` folder

## 📁 Project Structure

```
bg-color-changer/
├── public/              # Static files
├── src/
│   ├── App.jsx         # Main component
│   ├── BgChangerButton.jsx # Color button component
│   ├── index.css       # Global styles
│   └── main.jsx        # React entry point
├── package.json        # Dependencies & scripts
├── vite.config.js      # Vite configuration
├── eslint.config.js    # ESLint configuration
├── index.html          # HTML template
└── README.md           # Documentation
```

## 🐛 Troubleshooting

### Colors Not Changing
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache

### Port Already in Use
```bash
# If port 5173 is busy, Vite will use the next available port
npm run dev
```

### Build Issues
- Delete `node_modules` and `dist` folders
- Run `npm install` again
- Try `npm run build`

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Fork the repository
- Create a feature branch
- Add more colors or features
- Submit a pull request

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created as a learning project for React and Vite development.

---

**Enjoy your color-changing experience! 🎨**
