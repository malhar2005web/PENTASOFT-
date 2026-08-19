# DECISION.md — Architectural Decision Records (ADR)

## ADR-001: Vite + React 18 for Web Application Framework
- **Context**: Need fast build times, instant HMR, and smooth WebGL integration.
- **Decision**: Selected Vite + React 18 over heavy server frameworks for single-scroll corporate experience.

## ADR-002: Three.js & R3F for Floating 3D Laptop Interactive Visualization
- **Context**: The user explicitly requested a 3D animation of a floating laptop that rotates when mouse hovers over it.
- **Decision**: Implement procedural Three.js WebGL model with lerped pointer math to deliver 60fps interaction without requiring external 10MB GLTF assets.

## ADR-003: Pure Custom CSS + Tailwind CSS for Glassmorphism Design System
- **Context**: Require modern liquid-glass UI without heavy UI component libraries.
- **Decision**: Built custom design tokens in Tailwind and `index.css` for precision performance.
