# Uganda Explore - Project Website

## Overview

This is a marketing website for the Uganda Explore mobile application, built to showcase the Flutter-based tourism app that helps users discover Uganda's natural attractions through AR navigation, virtual tours, and AI-powered recommendations. The website serves as a project presentation platform and promotional tool for the mobile app.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React with TypeScript**: Modern React application built with TypeScript for type safety
- **Vite**: Fast build tool and development server for optimized development experience
- **Shadcn/ui Components**: Pre-built, accessible UI components with Radix UI primitives (minimal usage)
- **Pure CSS**: Custom CSS stylesheets with modular component styling and Uganda-themed color palette
- **Wouter**: Lightweight client-side routing library for navigation

### Backend Architecture
- **Express.js Server**: Minimal Node.js server handling API endpoints and static file serving
- **Contact Form API**: Single endpoint for handling contact form submissions
- **Static File Serving**: Development and production static asset serving through Vite integration

### Data Storage
- **In-Memory Storage**: Simple memory-based storage for user data (development setup)
- **Drizzle ORM**: Type-safe database toolkit configured for PostgreSQL
- **PostgreSQL Ready**: Database configuration prepared for PostgreSQL deployment

## Key Components

### Core Pages
- **Home Page**: Single-page application showcasing all sections
- **Hero Section**: Main landing area with project introduction and call-to-action buttons
- **Features Section**: Detailed breakdown of mobile app capabilities (AR, Virtual Tours, AI Assistant)
- **Technology Section**: Visual representation of tech stack used in mobile development
- **Gallery Section**: App screenshots and interface previews
- **Team Section**: Developer profiles and academic information
- **Download Section**: Installation instructions and GitHub repository access
- **Contact Section**: Form for user inquiries and feedback

### UI Components
- **Navigation**: Responsive navigation bar with smooth scrolling
- **Cards**: Feature cards, team member cards, and technology showcases
- **Forms**: Contact form with validation and submission handling
- **Buttons**: Various button styles matching Uganda flag colors
- **Toast Notifications**: User feedback for form submissions

### Styling System
- **Pure CSS Architecture**: Modular CSS files with component-specific styling
- **Uganda Theme**: Custom color palette inspired by Uganda flag (green, yellow, red) defined in CSS variables
- **Responsive Design**: Mobile-first approach with CSS media queries and responsive breakpoints
- **Component-based Styling**: Organized CSS classes following BEM-like methodology
- **CSS Variables**: Centralized design tokens for colors, spacing, typography, and effects

## Data Flow

### Client-Side Flow
1. User loads the website through Vite development server or static build
2. React router handles navigation between sections via smooth scrolling
3. Form submissions are handled through React state management
4. Contact form data is sent to Express API endpoint

### Server-Side Flow
1. Express server serves static files and handles API routes
2. Contact form submissions are processed and logged
3. Email integration ready for production deployment
4. Error handling and request logging for debugging

## External Dependencies

### Frontend Dependencies
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/***: Accessible UI component primitives
- **class-variance-authority**: Type-safe CSS class management
- **lucide-react**: Modern icon library
- **react-icons**: Additional icon sets including social media icons
- **date-fns**: Date manipulation utilities

### Backend Dependencies
- **express**: Web framework for Node.js
- **nodemailer**: Email sending capability (configured but not active)
- **drizzle-orm**: Database toolkit for TypeScript
- **@neondatabase/serverless**: PostgreSQL connection for serverless deployment

### Development Tools
- **TypeScript**: Type safety across the entire codebase
- **Vite**: Build tool with hot module replacement
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing and optimization

## Deployment Strategy

### Development Setup
- Vite development server with hot reload
- Express API server running concurrently
- TypeScript compilation and type checking
- Replit integration with development banner

### Production Build
- Vite builds optimized static assets to `dist/public`
- Express server builds to `dist/index.js` using esbuild
- Static file serving through Express in production
- Environment-based configuration for database connections

### Database Migration
- Drizzle migrations folder ready for schema changes
- PostgreSQL connection string required for production
- Schema defined in `shared/schema.ts` for type safety

### Replit Deployment
- Configured for Replit hosting environment
- Development mode detection for Replit-specific features
- Cartographer plugin integration for Replit IDE
- Runtime error overlay for development debugging

The architecture follows a monorepo pattern with shared types between frontend and backend, ensuring type safety across the entire application. The system is designed to be easily deployable on various platforms while maintaining development simplicity through Vite's fast refresh and Express's straightforward API handling.