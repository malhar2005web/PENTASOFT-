# ARCHITECTURE.md — System Architecture & Component Structure

## Technology Stack
- **Framework**: React 18 + Vite
- **3D Graphics Engine**: Three.js + `@react-three/fiber` + `@react-three/drei`
- **Styling**: Tailwind CSS + Custom CSS Variables
- **Icons**: Lucide React

## Component Hierarchy
```
src/
├── main.jsx
├── App.jsx
├── index.css
└── components/
    ├── 3d/
    │   └── LaptopCanvas.jsx      # WebGL 3D levitating laptop with hover physics
    ├── Navbar.jsx                # Frosted glass anchor navigation
    ├── HeroSection.jsx           # Hero headline + 3D Laptop canvas + CTAs
    ├── WhoWeAre.jsx              # Company story & enterprise metrics
    ├── WhatWeBuild.jsx           # Interactive solution grid
    ├── Capabilities.jsx          # Technical domain capabilities
    ├── TechArchitecture.jsx     # Visual connected node network / data pipeline
    ├── SelectedWork.jsx          # Concept project showcases
    ├── WhyPentaSoft.jsx          # Engineering & security pillars
    ├── FinalCTA.jsx              # Closing call-to-action & contact trigger
    └── Footer.jsx                # Corporate footer & system status
```
