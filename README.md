# Digital Wallet System — Frontend (React + Redux Toolkit + RTK Query)

> **Project:** Digital Wallet — role-based frontend for Users, Agents, and Admins


---

## Project Overview

This project is the **frontend** for a Digital Wallet system (bKash/Nagad-like). It is built with **React**, **TypeScript**, **Redux Toolkit** and **RTK Query**, and styled with **Tailwind CSS**.

The frontend implements:

* Public landing pages (Home, About, Features, Contact, FAQ, etc.)
* Role-based authentication and redirection (User, Agent, Admin)
* Dashboards for each role with role-specific operations (deposit, withdraw, send money, manage users/agents, transaction listings)
* Transaction history with pagination and filters
* Guided tour (runs once for new users; restart option in Settings)
* Dark/Light theme toggle with persistence
* Form validation, skeleton loaders, toasts, charts, and accessible UI patterns

> This repository is the **frontend** portion. A backend (Node/Express + MongoDB) is expected to be available (see `BACKEND_URL` env variable). If a backend is not available, you can run the included mock server (see notes).

---

## Live Demo

* Frontend: *Replace with your deployed frontend URL* ( `https://digital-wallte-forntend.vercel.app/`)
* Backend: *Replace with your deployed backend URL* ( `https://wallte-hero.vercel.app/`)

> Be sure to update links above after deployment.

---

## Screenshots

*Add screenshots or animated GIFs here to showcase the landing page and dashboards.*

---

## Features

**Public**

* Landing page with sticky navbar and responsive hero
* About / Features / Contact / FAQ
* Contact form (simulated submit)
* Skeleton loading UI and smooth transitions

**Auth**

* Registration (choose role: User or Agent)
* Login with JWT-based auth
* Persisted auth state (localStorage)
* Role-based route protection & navigation

**User Dashboard**

* Wallet balance card
* Send money (search user by phone/email)
* Withdraw / Deposit (agent-assisted simulation)
* Transaction history with pagination & filters
* Profile management

**Agent Dashboard**

* Cash-in / Cash-out flows for users
* Agent transaction history & optional commission view
* Profile management

**Admin Dashboard**

* High-level stats (users, agents, transactions, total volume)
* Manage users and agents (block/unblock, approve/suspend)
* Advanced filters and search on transactions



---

## Tech Stack

* React (v18+) + TypeScript
* React Router v6
* Redux Toolkit + RTK Query
* Tailwind CSS
* react-toastify (toasts)
* react-hook-form + yup / zod (forms & validation)
* recharts or chart.js (charts)
* localStorage for simple persistence (auth, theme, tourSeen)




---

## Requirements

* Node.js v18+ (recommended)
* npm or yarn
* An instance of the backend API (see `BACKEND_URL`) or use the mock server

---

## Getting Started (Local Development)

### Clone

```bash
# clone your frontend repository
git clone https://github.com/<your-username>/<wallet-frontend>.git
cd <wallet-frontend>
```

### Frontend Setup

```bash
# install dependencies
npm install
# or
# yarn install

# start dev server
npm run dev
# or
# yarn dev
```

The app runs by default at `http://localhost:3000`.

### Backend Setup (if provided)

If you have the backend repository available, clone and run it on `http://localhost:5000` by default (or update the `BACKEND_URL` in the frontend `.env`). Follow the backend README for database and JWT secret configuration.

> If the backend is not present, the frontend contains a small mock file (`src/mocks`) that can be toggled to simulate responses for demonstration and testing.

---

## Environment Variables

Create a `.env` file in the frontend root (copy from `.env.example`) and set the following values:

```
VITE_BASE_URL=http://localhost:5000/api/v1

VITE_STRIPE_KEY=pk_test_51N4mX2SDH3b 


# tour and theme keys (optional)
REACT_APP_TOUR_KEY=tour_seen
```

> If you use `create-react-app`, names will be `REACT_APP_...`. If you use Vite, use `VITE_...` as shown.

---

## Available Scripts

```bash
npm run dev        # start development server (Vite/CRA dev)
npm run build      # production build
npm run preview    # preview prod build locally (if Vite)
npm run lint       # run eslint
npm run test       # run unit tests (if configured)
```

---

## Authentication & Roles

* **JWT-based** auth — login returns an access token which is stored in `localStorage` under `VITE_JWT_STORAGE_KEY`.
* Protected routes are wrapped with a `RequireAuth` component that checks both authentication and `role` claim.
* Role-based redirects occur after login (e.g., `/dashboard/user`, `/dashboard/agent`, `/dashboard/admin`).

**Sample test credentials (replace with your seeded users)**

```
# Admin
email: admin@example.com
password: Admin@123
role: admin

# Agent
email: agent@example.com
password: Agent@123
role: agent

# User
email: user@example.com
password: User@123
role: user
```

Update these credentials based on your backend seeding or demo users.

---

## Main Flows / How to Use

1. **Register** as a User or Agent from the public registration page.
2. **Login** and you will be redirected to your role-specific dashboard.
3. **User**: view balance, send money (search by phone/email), see transaction list with pagination and filters.
4. **Agent**: perform cash-in to user wallets and view agent transaction history.
5. **Admin**: manage users/agents, view system statistics and transaction logs.

All actions show success/error toasts and update the UI optimistically when appropriate (RTK Query `invalidatesTags` used for cache updates).





## Testing

* Unit tests can be added using `jest` + `react-testing-library`.
* E2E tests can be added with `cypress` for flows such as login, send money, and admin actions.

---

## Deployment

* Build the frontend with `npm run build` and deploy the `build` / `dist` folder to a static host like Vercel, Netlify, or Surge.
* Ensure `VITE_BACKEND_URL` (or equivalent) points to the production API.

Example for Vercel / Netlify:

* Set environment variables in the hosting dashboard.
* Connect GitHub repo and set build command to `npm run build` and publish directory `dist` or `build` depending on your bundler.

---

## Notes & Implementation Details

* **RTK Query** used for all API calls with `createApi` and proper `tags`/`invalidatesTags` for cache invalidation.
* **Role Guard** implemented via a wrapper `ProtectedRoute` which checks the JWT and role.
* **Forms** managed with `react-hook-form` and validated with `yup` or `zod`.
* **Charts** updated with real data pulled from the transactions endpoints; mock data used where backend is absent.
* **Pagination** implemented server-side when possible. Frontend supports query params `?page=&limit=` and filter objects.





---

## Contact

**Author:** Sojib Sheikh

* Website: [https://sojibsheikh.com](https://sojibsheikh.com)
* Email: [sojib02018@gmail.com](mailto:sojib02018@gmail.com])

---

### Final notes

* Replace placeholder URLs and credentials with your real deployed URLs and seeded demo users.
* If you want, I can also produce a short `README-Backend.md` summarizing the backend endpoints and sample requests for the frontend to consume.
