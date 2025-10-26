# Kashf Siddiqui - Robotics Portfolio

A clean, minimal portfolio website for Kashf Siddiqui, a robotics engineer and UT Austin Aerospace student. Built with React, Vite, Tailwind CSS, and Framer Motion, inspired by [Raphael Chang's portfolio](https://raphaelchang.com/#).

## 🚀 Features

- **Minimal Design**: Clean, single-page layout with dense project grid
- **Visual Focus**: Project squares with hover overlays and pastel backgrounds
- **Simple Navigation**: Just LinkedIn and GitHub links in the header
- **Smooth Animations**: Framer Motion for subtle scroll and hover effects
- **Responsive Layout**: Works perfectly on all devices

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx    # Simple nav with LinkedIn/GitHub links
│   ├── Hero.jsx          # Minimal intro text
│   ├── Projects.jsx      # Dense grid of project squares
│   └── Footer.jsx        # Simple copyright footer
├── App.jsx               # Main application component
├── main.jsx              # Application entry point
└── index.css             # Global styles and Tailwind imports
```

## 🛠️ Tech Stack

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Inter Font** - Clean, modern typography

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd robotics-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🎨 Design Philosophy

This portfolio follows the same minimal, visual approach as [Raphael Chang's site](https://raphaelchang.com/#):

- **Single page layout** - everything on one scroll
- **Dense project grid** - squares close together with minimal gaps
- **Pastel backgrounds** - each project has a subtle colored background
- **Hover overlays** - project details appear on hover
- **Simple navigation** - just social links, no complex menus

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: 2 columns
- Tablet: 3 columns  
- Desktop: 4 columns

## 🎭 Animations

- **Scroll-triggered**: Elements fade in as you scroll
- **Hover effects**: Cards scale slightly and show overlay
- **Staggered animations**: Project squares animate in sequence
- **Smooth transitions**: All interactions are smooth and subtle

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
The built files in the `dist` directory can be deployed to any static hosting service.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Kashf Siddiqui