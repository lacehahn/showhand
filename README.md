# Showhand - Real Estate Search Demo

This is a real estate search demo project built with Next.js and Express.

## Project Structure

```
showhand/
├── backend/                 # Express backend
│   ├── src/
│   │   ├── data/           # Data files
│   │   └── index.ts        # Server entry
│   └── package.json
│
└── frontend/               # Next.js frontend
    ├── src/
    │   ├── app/           # Page components
    │   ├── services/      # API services
    │   └── types/         # Type definitions
    └── package.json
```

## Requirements

- Node.js 18+
- npm 9+

## Installation

1. Clone the project
```bash
git clone <repository-url>
cd showhand
```

2. Install all dependencies
```bash
npm run install:all
```

3. Configure environment variables
Create a `.env.local` file in the frontend directory:
```
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

## Development

Start the development server (runs both frontend and backend):
```bash
npm start
```

Frontend will run at http://localhost:3000
Backend will run at http://localhost:3001

## Build

Build for production:
```bash
npm run build
```

## Features

- Real estate search
- Property details view
- Map display
- Responsive design

## Tech Stack

Frontend:
- Next.js
- TypeScript
- Material-UI
- Google Maps React
- Tailwind CSS

Backend:
- Express
- TypeScript
- CORS
