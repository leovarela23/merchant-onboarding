# Merchant Onboarding Portal

A React-based web application for merchant onboarding with authentication and form submission capabilities.

## Features

- User authentication with username/password
- Merchant onboarding form with validation
- Integration with Token.io API
- Responsive design with Tailwind CSS
- TypeScript support

## Prerequisites

- Node.js 20.x
- npm (comes with Node.js)

## Environment Variables

Create a `.env` file in the root directory with:

```env
VITE_API_AUTH_TOKEN="Your Token.io API authentication token"
```

## Installation

```bash
# Install dependencies
npm install
```

## Development

```bash
# Start development server
npm run dev
```

The development server will start on `http://localhost:5173`

## Building for Production

```bash
# Create production build
npm run build
```

## Running in Production

```bash
# Start production server
npm start
```

The server will start on the port specified by the `PORT` environment variable.

## Technology Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (for icons)

## Project Structure

```
src/
├── components/          # React components
│   ├── LoginForm.tsx   # Authentication component
│   └── MerchantForm.tsx# Merchant onboarding form
├── types.ts            # TypeScript type definitions
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

## API Integration

The application integrates with Token.io's API for merchant onboarding. API requests are proxied through the Vite development server to handle CORS and authentication.

## Authentication

Default credentials for development:
- Username: Hobex
- Password: Token!0

## Deployment

The application is configured for deployment on Heroku with:
- Automatic build process
- Dynamic port allocation
- Node.js 20.x runtime

## License

Private - All rights reserved
