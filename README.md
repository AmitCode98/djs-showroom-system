# DJS Showroom System

Premium luxury jewellery ecommerce frontend for Dutta Jewellers & Sons.

Built with a scalable modern frontend architecture using:
- Next.js 16
- TypeScript
- Tailwind CSS
- App Router
- shadcn/ui

---

## Project Overview

DJS Showroom System is a modern luxury jewellery ecommerce platform focused on:

- Premium UI/UX
- Mobile-first responsive design
- Reusable component architecture
- Scalable frontend structure
- Production-ready development workflow

The project is currently focused on frontend architecture and UI development before backend integration.

---

## Features

- Luxury ecommerce UI
- Responsive mobile navigation
- Custom design system
- Typography system
- Reusable UI components
- Optimized image handling
- Scalable folder architecture
- Type-safe frontend development
- Production-ready configuration

---

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React
- React Icons
- pnpm

---

## Folder Structure

txt app/ components/ constants/ hooks/ lib/ services/ types/ public/ 

---

## Development Setup

Install dependencies:

bash pnpm install 

Start development server:

bash pnpm dev 

Run lint:

bash pnpm lint 

Run production build:

bash pnpm build 

---

## Branch Workflow

| Branch | Purpose |
|--------|---------|
| main | Stable production-ready branch |
| frontend-dev | Frontend development |
| backend-dev | Backend integration |

---

## Development Rules

- Maintain luxury minimal UI consistency
- Reuse existing components whenever possible
- Use existing design tokens and spacing system
- Avoid random inline styles
- Keep components modular and scalable
- Follow TypeScript best practices

---

## Status

Frontend architecture and UI system setup completed.

Backend integration and ecommerce functionality will be implemented in upcoming development phases.




DJS Showroom System — Complete Project Context
Project Overview
The DJS Showroom System is a premium in-store jewellery showroom platform designed specifically for tablet devices placed inside a physical jewellery store.
This is not a traditional ecommerce website and not an online marketplace.
Customers cannot customize jewellery or order products for home delivery. The system is designed to help customers browse the showroom's available jewellery collections and place purchase requests while they are physically present inside the store.
The goal is to modernize the in-store shopping experience while keeping the interaction extremely simple for customers and operationally efficient for showroom staff.
Core Business Model
The workflow is intentionally simple.
A customer enters the jewellery showroom.
The customer uses a tablet provided by the showroom.
The customer browses available jewellery collections.
The customer selects products they are interested in.
The customer submits a purchase request.
The showroom owner or staff receives the request.
The selected jewellery is immediately presented to the customer inside the showroom.
The final purchase is completed physically inside the store.
No shipping.
No delivery.
No online checkout.
No product customization.
The system acts as a digital showroom catalogue and purchase request platform.
Primary Goal
Create a premium luxury digital experience that:
reduces customer confusion
makes jewellery browsing effortless
helps showroom staff serve customers faster
creates a modern in-store experience
showcases products elegantly
The website should feel more like a luxury showroom assistant than an ecommerce website.
Target Audience
Primary audience:
Jewellery showroom visitors
Families
Wedding customers
Gift buyers
Customers visiting the physical store
Most customers are expected to be from West Bengal, India.
Many customers may not be highly familiar with modern ecommerce interfaces, so the UI should prioritize simplicity, readability, and ease of use.
Device Strategy
The platform is designed primarily for:
Tablets (highest priority)
Desktop (secondary)
Mobile responsive (supported)
The entire browsing experience is optimized for touch interaction.
Hover-based interactions should be avoided or replaced with always-visible controls where appropriate.
Design Philosophy
The customer-facing website should communicate:
Luxury
Elegance
Simplicity
Trust
Premium craftsmanship
Avoid:
flashy ecommerce animations
aggressive promotions
discount-heavy visuals
cluttered layouts
The interface should feel calm, refined, and premium.
Technical Stack
Frontend:
Next.js (App Router)
TypeScript
Tailwind CSS
React
shadcn/ui
Architecture:
Component-based
Modular
Scalable
Production-ready
Current Frontend Architecture
The project already includes:
centralized product types
centralized constants
reusable UI components
reusable image components
reusable admin architecture
scalable folder structure
production-ready code organization
The architecture is designed to integrate easily with a future backend.
Image Architecture
Images are organized for scalability.
Structure includes:
Hero images
Product images
Category images
Budget collection images
Featured product images
UI assets
Products support:
main image
gallery images
thumbnail images
The image system is centralized with reusable components, loading states, placeholders, and fallback handling.
Future image hosting is expected to use Cloudinary or another CDN.
Homepage Structure
The homepage currently follows this flow:
Hero Section
Featured Pieces
Shop Jewellery By Category
Shop By Budget
New Arrivals
Footer
Each section follows the same luxury design language.
Customer Browsing Experience
Customers browse jewellery through:
Categories
Budget ranges
Featured products
New arrivals
Bestselling products
Product cards provide:
Wishlist
Add to Cart (purchase request)
View Details
The interaction is designed for touch-first tablet usage.
Product Detail Page
Each product has a dedicated detail page with:
large product image
image gallery
thumbnail switching
product information
pricing
specifications
purchase request button
The page uses smooth scrolling and optimized navigation back to the collection.
Language Strategy
The primary website language is English.
Selective Bengali content is used where it improves usability for local customers.
Examples:
showroom announcements
consultation messages
promotional marquee
The architecture is prepared for future multilingual support through a language toggle.
Admin Panel
The admin panel is part of the same Next.js project.
It is not a separate application.
Purpose:
showroom operations
product management
homepage content management
purchase request management
announcements
settings
The admin panel is designed as business software, not as a luxury marketing interface.
Admin Features
Current architecture supports:
Dashboard
operational overview
statistics
recent requests
Products
add
edit
delete
featured
bestseller
new arrival
stock management
Categories
create
edit
reorder
visibility
Homepage
featured products
homepage sections
hero management
Budget Collections
budget ranges
assigned products
Announcements
Bengali marquee
showroom notices
Settings
showroom details
contact information
business information
Orders
showroom purchase requests
operational status tracking
Form Architecture
The project is moving toward a scalable frontend architecture using:
react-hook-form
Zod
centralized validation schemas
This is for frontend architecture only.
The backend will provide actual persistence and business logic.
Backend Strategy
The project is intended to integrate with a dedicated custom backend developed by a backend engineer.
The frontend is being built to be:
API-ready
backend-ready
validation-ready
The expected backend responsibilities include:
authentication
product APIs
category APIs
purchase requests
inventory management
payment gateway integration
image upload integration
business logic
security
database
The frontend should remain independent of backend implementation details.
Image Upload Strategy
Current images are static.
Future architecture supports:
Cloudinary (recommended)
or
another media storage solution
The frontend already uses centralized image rendering to simplify future integration.
Future Features
Planned future enhancements include:
secure admin authentication
real database integration
Cloudinary uploads
payment gateway
inventory synchronization
order management
showroom analytics
multilingual support
notification system
real-time purchase requests
Design Principles
Every future feature must preserve the following principles:
Luxury without complexity
Operational efficiency
Touch-first usability
Tablet optimization
Minimal visual noise
Consistent design language
Reusable architecture
Scalable codebase
Production-ready engineering
Overall Vision
The DJS Showroom System is not an ecommerce website.
It is a Luxury Jewellery Showroom Operating System that combines a premium customer-facing browsing experience with a professional operational dashboard for showroom staff.
The project is being built with production-grade frontend architecture, allowing seamless future integration with a dedicated backend, media management, authentication, payment processing, and inventory systems while maintaining a refined, elegant, and user-friendly experience for both customers and showroom operators.