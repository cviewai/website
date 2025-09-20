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

## Code Quality & CI

This project uses a combination of local and server-side checks to ensure high code quality and a stable main branch.

### Local Pre-Commit Hooks

We use the [pre-commit](https://pre-commit.com/) framework to automatically format code before it is committed. The hooks are configured in `.pre-commit-config.yaml` and use Prettier to format all relevant files.

**To activate the hooks**, you must first install the `pre-commit` tool itself. On Arch Linux, this can be done via `yay -S pre-commit`. For other systems, see the [official installation guide](https://pre-commit.com/#install).

Once the tool is installed, you must run this command once inside your cloned repository:

```bash
pre-commit install
```

After this, the hooks will run automatically on every `git commit`.

### Continuous Integration (CI)

We use [GitHub Actions](/.github/workflows/main.yml) to run a full production build (`npm run build`) on every push and pull request to the `master` branch. This acts as a safety net to ensure that no changes that would break the production deployment are merged.

---

## Deployment

This project is configured for and deployed on the [Vercel Platform](https://vercel.com/). Vercel is the recommended hosting provider as it is built by the creators of Next.js and offers a seamless, zero-configuration deployment experience.

To deploy your own instance:

1.  Connect your Git repository to Vercel.
2.  Add your `ZEPTO_API_KEY` as an environment variable in the Vercel project settings.
3.  Push to your main branch to trigger a deployment.

**Note:** This project is currently configured to be deployed on Vercel's free Hobby tier by using a **public** GitHub repository.
