# AWAD Exercise - Run locally

This README explains how to run the project locally on macOS (zsh). It covers starting the local PostgreSQL via Docker Compose, running the backend and frontend in development mode, and basic troubleshooting tips.

## Prerequisites

- Docker Desktop (running)
- Node.js (>= 16) and npm

If your project path contains spaces, use quotes when `cd`ing (examples below use quoted paths).

## Quick start (copy-paste)

1. Open a terminal and go to project root

```bash
cd "/Users/huynhdung/Project/Web Project/AWAD_Exercise/Week 5"
```

2. Start local services (Postgres) with Docker Compose

```bash
docker-compose up -d

docker-compose logs -f
```

3. Start backend (new terminal tab/window)

```bash
cd "backend"
npm install
npm run dev
```

Notes:

- If the backend needs environment variables, check `backend/README.md`, `backend/.env`, or the `backend/src/config` folder. Typical variables include database connection string, JWT secrets and ports.
- Default backend port used by the frontend is usually `http://localhost:3000` — adjust if your backend prints a different port.

4. Start frontend (another terminal tab/window)

```bash
cd "frontend"
npm install

echo "VITE_API_URL=http://localhost:3000" > .env.local

npm run dev
```

The Vite dev server typically opens on `http://localhost:5173`.

5. Test in browser

```
http://localhost:5173
```

Try signup / signin flows. The frontend calls the backend via the address set in `VITE_API_URL`.

6. Stop services

- Stop frontend/backend dev servers with Ctrl+C in their terminals
- Stop Docker containers

```bash
docker-compose down

docker-compose down -v
```
