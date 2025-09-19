# CrystalView Website

This is the official marketing and informational website for CrystalView, an AI-powered financial technology company. The site is built with a modern, performant technology stack and serves as the primary entry point for customers to learn about the company, its services, and its flagship product, "Vision".

## Tech Stack

This project is built with a modern, production-ready technology stack:

- **Framework:** [Next.js](https://nextjs.org/) (v15) with the App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4)
- **UI Components:** [React](https://react.dev/) Server and Client Components
- **Icons:** [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- **Content (Legal Pages):** [Markdown](https://www.markdownguide.org/) rendered with `react-markdown`
- **Contact Form Backend:** Next.js API Routes
- **Email Provider:** [Zoho ZeptoMail](https://www.zoho.com/zeptomail/)
- **Analytics:** [Google Analytics](https://analytics.google.com/) via `@next/third-parties`
- **Linting:** [ESLint](https://eslint.org/)
- **Development Bundler:** [Turbopack](https://turbo.build/pack)

---

## Getting Started

Follow these instructions to set up and run the project in a local development environment.

### Prerequisites

- [Node.js](https://nodejs.org/en) (v20.x or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### 1. Installation

Clone the repository and install the necessary dependencies:

```bash
git clone <repository-url>
cd cviewai
npm install
```

### 2. Environment Variables

The contact form requires an API key from Zoho ZeptoMail to send emails.

1.  Create a new file named `.env.local` in the root of the project.
2.  Add your Zoho API key to this file as shown below. This file is included in `.gitignore` and will not be committed to the repository.

```
# Zoho ZeptoMail API Authorization Token
# This is the full 'Authorization' header value.
# Example: Zoho-enczapikey wSsVR61z80P1Dfp9nT2kJuY+...
ZEPTO_API_KEY="<PASTE_YOUR_FULL_AUTHORIZATION_TOKEN_HERE>"
```

### 3. Running the Development Server

Once the dependencies are installed and the environment variables are set, you can start the development server:

```bash
npm run dev
```

The server will start with Turbopack for a fast development experience. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page will auto-update as you edit the files.

---

## Deployment

The easiest way to deploy this Next.js application is to use the [Vercel Platform](https://vercel.com/new).

When deploying, remember to add your `ZEPTO_API_KEY` as an environment variable in the Vercel project settings.