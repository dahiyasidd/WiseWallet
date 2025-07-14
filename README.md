# Full Stack AI Finance Platform with Next.js, Supabase, Tailwind, Prisma, Inngest, ArcJet, Shadcn UI  🔥🔥

## Setup Instructions

### 1. Clone the Repository
```sh
git clone https://github.com/subhm2004/WiseWallet.git

cd WiseWallet
```
or 
```sh
git clone https://github.com/dahiyasidd/WiseWallet.git

cd WiseWallet
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Create a `.env` File
Make sure to create a `.env` file in the root directory with the following environment variables:

```
DATABASE_URL=
DIRECT_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=

RESEND_API_KEY=

ARCJET_KEY=
```

### 4. Run the Development Server
```sh
npm run dev
```

Your app should now be running at `http://localhost:3000` 🚀

### 5. Run Inngest Server
```sh
npx inngest-cli@latest dev
```

## Technologies Used
WiseWallet has been developed using modern web development technologies and tools that ensure performance, scalability, and security.

### Frontend Technologies:
- **Next.js**: A fast, scalable, and SEO-friendly frontend framework that provides a smooth user experience.
- **React**: A powerful JavaScript library for building dynamic and responsive user interfaces.
- **Chakra UI**: A modern and responsive UI component library for creating visually appealing and accessible designs.
- **ShadCN UI**: A flexible, customizable UI library that enhances the design system with components optimized for performance and accessibility.
- **React Hook Form & Zod**: Efficient form handling and robust validation libraries to ensure error-free user inputs.

### Backend Technologies:
- **Node.js & Express.js**: High-performance server-side JavaScript runtime and framework used for building RESTful APIs.
- **Cron Jobs with Inngest**: For automated task scheduling, such as managing recurring transactions and generating monthly reports.

### Authentication:
- **Clerk**: A secure authentication solution that simplifies user sign-ups, logins, and session management.

### Database:
- **Supabase**: A real-time database and backend-as-a-service (BaaS) solution for data storage, authentication, and real-time data synchronization.

### Security & Rate Limiting:
- **ArcJet**: A security solution that helps in protecting APIs through rate limiting and other security mechanisms.

### AI-Powered Features:
- **Google Gemini**: An advanced AI model integrated to enhance the platform's capabilities, providing users with intelligent insights and personalized financial recommendations.
- **Receipt Scanning AI**: Analyzes receipt images and extracts transaction details in a structured JSON format. The extracted information includes:
  - **Total Amount**: The exact numerical value of the transaction.
  - **Date**: The date of the transaction in ISO format (e.g., 2023-04-01).
  - **Description**: A brief summary of the items or services purchased.
  - **Merchant/Store Name**: The name of the store or merchant from where the transaction was made.
  - **Suggested Category**: A category for the expense such as housing, transportation, groceries, utilities, entertainment, food, shopping, healthcare, education, personal, travel, insurance, gifts, bills, or other-expense.
  
  If the uploaded document is not a receipt, the system will return an empty object.
- **Personalized Financial Insights**: AI-driven analysis that provides recommendations based on users' spending habits.

