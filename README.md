# ByteForge

A programming interview preparation platform built as a college miniproject. Includes company-tagged interview questions, multi-language mock coding tests with a real code execution engine, guided solutions (brute force → optimal), and topic-wise quizzes.

## Features

- **Company-tagged Q&A bank** — curated interview questions labeled by company (Google, Amazon, Microsoft, etc.)
- **Solutions with intuition** — every problem covers all approaches, from brute force to optimal, with complexity analysis
- **Mock coding tests** — timed test sessions with a real compiler/execution engine (via Judge0/Piston API), server-authoritative timing
- **In-browser code editor** — powered by Monaco Editor (the engine behind VS Code)
- **Multi-language support** — C++, Java, Python (extendable)
- **Quizzes** — topic-wise MCQs to test conceptual knowledge

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React (Vite) |
| Backend | Node.js / Express *(or FastAPI — update once decided)* |
| Database | MongoDB *(or PostgreSQL — update once decided)* |
| Code Execution | Judge0 CE (via RapidAPI) / Piston API |
| Code Editor | Monaco Editor |
| Deployment | Vercel (frontend) + Render/Railway (backend) |

## Project Structure

```
ByteForge/
├── frontend/       # React app
├── backend/        # API server
├── docs/           # Architecture diagrams, API contract
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn
- MongoDB instance (local or Atlas) *(update if using SQL)*

### Setup

1. Clone the repo
   ```bash
   git clone https://github.com/mukul1825/ByteForge.git
   cd ByteForge
   ```

2. Install dependencies
   ```bash
   cd frontend && npm install
   cd ../backend && npm install
   ```

3. Set up environment variables
   - Copy `.env.example` to `.env` in both `frontend/` and `backend/`
   - Fill in your MongoDB URI, JWT secret, and Judge0/RapidAPI key

4. Run the app
   ```bash
   # Terminal 1
   cd backend && npm run dev

   # Terminal 2
   cd frontend && npm run dev
   ```

## Team

| Name | Role |
|---|---|
| — | Backend/API Lead |
| — | Judge Engine Integration |
| — | Frontend — Core App |
| — | Frontend — UX/Dashboard |
| — | Content & Data (x2) |

## Roadmap

See [Projects board](../../projects) for the full 12-week plan and issue tracking.

## License

This project is for academic purposes as part of a college miniproject.
