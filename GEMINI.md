# Project Summary: CrystalView Website

This document provides a comprehensive overview of the CrystalView website project for future development sessions.

## 1. Project Overview

This project is the official marketing and informational website for CrystalView, an AI-powered financial technology company. It was migrated from a legacy React application to a modern, performant Next.js stack.

The website's primary goals are:

- To present a professional and modern brand image.
- To clearly explain the company's services.
- To showcase the flagship product, "Vision," a natural language chatbot for querying QuickBooks data.
- To provide a secure and reliable way for potential customers to get in touch.

## 2. Technology Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4. **Note:** This version uses a CSS-first configuration. The theme and plugins are defined directly in `src/app/globals.css` using `@theme` and `@plugin` directives.
- **UI:** React (Server and Client Components)
- **Content (Legal):** Markdown files (`.md`) in the root, rendered with `react-markdown` and styled with `@tailwindcss/typography`.
- **Contact Form:** A Next.js API Route (`/api/contact`) that sends emails using the official `zeptomail` Node.js SDK.
- **Analytics:** Google Analytics, integrated via the official `@next/third-parties` library.
- **Code Quality:** ESLint for linting and Prettier for formatting. Formatting is enforced automatically on commit by the **`pre-commit` framework**.
- **CI/CD:** A **GitHub Actions workflow** is configured to run `npm run build` on every push to `master`, ensuring the branch is always deployable.

## 3. Project Structure

- `src/app/`: Contains the page routes, the root layout, and the global CSS file.
- `src/components/`: Contains all reusable React components (e.g., `Header`, `Hero`, `ProductShowcase`).
- `src/types/`: Contains custom TypeScript declaration files (e.g., for `zeptomail`).
- `public/`: Contains static assets like the favicon and social sharing images.
- `eula.md`, `privacy-policy.md`: Markdown-based content for the legal pages.

## 4. Key Decisions & Configuration

- **Deployment:** The project is deployed on **Vercel's free Hobby tier**. This was achieved by making the GitHub repository **public**, which bypasses the paywall for deploying from a private GitHub Organization.
- **Environment Variables:** The contact form requires a Zoho ZeptoMail API key. This is stored in a `.env.local` file (which is git-ignored) under the variable name `ZEPTO_API_KEY`.
- **Local Production Checks:** The project is configured to use strict ESLint rules that match the Vercel deployment environment. Developers should run `npm run lint` and `npm run build` locally to catch errors before pushing.
- **Branding:** The company name "CrystalView" uses the "Poppins" font in the header for a distinct, logo-like feel, while the body text uses "Inter".

## 5. Development Workflow

1.  **Install Dependencies:** `npm install`
2.  **Set Up Environment:** Create a `.env.local` file and add the `ZEPTO_API_KEY`.
3.  **Activate Pre-Commit Hooks:** Run `pre-commit install` once to set up the automated formatting hooks.
4.  **Run Development Server:** `npm run dev`
5.  **Check for Errors Before Pushing:**
    - Code formatting is handled automatically by the pre-commit hook.
    - Manually run `npm run lint` for style issues and `npm run build` to catch any production build errors.
    - The GitHub Actions CI provides a final safety net.
