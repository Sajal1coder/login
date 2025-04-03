# Backend README.md
# Authentication API Backend

## Tech Stack
- **Runtime**: Node.js (v18+)
- **Framework**: Express.js
- **Database**: MongoDB (via Prisma ORM)
- **Authentication**: JWT
- **Language**: TypeScript
- **Validation**: Zod

## Project Structure
backend/
├── src/
│ ├── controllers/ # Business logic
│ ├── routes/ # API endpoints
│ ├── utils/ # Utilities and helpers
│ ├── app.ts # Express app configuration
│ └── server.ts # Server entry point
├── prisma/
│ └── schema.prisma # Database schema
└── .env # Environment variables

## Setup Instructions

### 1. Install dependencies
npm install
### 2. Configure environment
Create .env file:
cp .env.example .env
DATABASE_URL="mongodb://username:password@localhost:27017/dbname?authSource=admin"
JWT_SECRET="your-32-character-secret-key"
PORT=4000

### 3. Database setup
npx prisma generate
npx prisma db push
### 4. Run the server
  npm run dev
  
API Endpoints
Method	Endpoint	Description
POST	/auth/register	Register new user
POST	/auth/login	Authenticate user
Development
Watch mode: npm run dev

Production build: npm run build

Start production: npm start


# Frontend README.md
# Authentication React App

## Tech Stack
- **Framework**: React (v18+)
- **State Management**: React Query
- **Form Handling**: React Hook Form + Zod
- **Styling**: CSS Modules
- **HTTP Client**: Axios

## Project Structure
frontend/
├── src/
│ ├── components/ # Reusable components
│ ├── hooks/ # Custom hooks
│ ├── pages/ # Page components
│ ├── utils/ # Utilities and schemas
│ ├── App.tsx # Main app component
│ └── main.tsx # Entry point
└── .env # Environment variables

## Setup Instructions

### 1. Install dependencies

npm install
cp .env.example .env
VITE_API_URL=http://localhost:4000
npm run dev


Available Scripts
dev: Runs the app in development mode

build: Creates a production build

preview: Serves the production build locally

test: Runs unit tests

Features
User registration with form validation

Login with JWT authentication

Protected routes

Error handling
