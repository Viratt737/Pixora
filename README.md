#  Pixora

> **AI-powered SaaS platform that converts text prompts into high-quality images.**

Pixora lets users generate stunning AI images simply by describing what they want in words. Built as a full-stack web application with a credit-based system and integrated payments, Pixora demonstrates a production-ready SaaS architecture.

---

## Features

- **AI Image Generation** — Convert text prompts into high-quality images using generative AI models
- **Credit System** — Users consume credits per image generation; purchase more credits as needed
- **Razorpay Payment Integration** — Secure, seamless credit purchase flow with Razorpay (test & live mode)
- **User Authentication** — Secure registration and login with JWT-based auth
- **MongoDB Atlas** — Cloud-hosted database for users, credits, and transaction history
- **Vite + React Frontend** — Lightning-fast development with React and Vite
- **RESTful API** — Clean Node.js/Express backend serving the frontend

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React (Vite), Axios, Context API |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas (Mongoose) |
| Payments | Razorpay |
| Auth | JWT (JSON Web Tokens) |
| AI | Generative image model API |

---

##  Project Structure

```
Pixora/
├── Client/                 # React frontend (Vite)
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── context/        # AppContext — global state (user, token, credits)
│   │   ├── pages/          # Page-level components
│   │   └── assets/         # Static assets
│   ├── .env                # Frontend environment variables
│   └── package.json
│
└── Server/                 # Node.js backend
    ├── controllers/        # Route handler logic
    ├── models/             # Mongoose models (User, etc.)
    ├── routes/             # Express route definitions
    ├── middlewares/         # Auth & other middleware
    ├── .env                # Backend environment variables
    └── server.js           # Entry point
```

---

##  Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn
- MongoDB Atlas account
- Razorpay account (for payments)
- AI image generation API key

---

### 1. Clone the repository

```bash
git clone https://github.com/Viratt737/Pixora.git
cd Pixora
```

---

### 2. Set up the Backend

```bash
cd Server
npm install
```

Create a `.env` file inside `Server/`:

```env
PORT=4000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key

CLIPDROP_API=your_ai_image_api_key

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

>  **Important:** Make sure `dotenv` is initialized at the very top of `server.js` — before any other imports that use environment variables (especially before the Razorpay instance is created).

Start the backend server:

```bash
npm run server
# or
node server.js
```

The server will run at `http://localhost:4000`.

---

### 3. Set up the Frontend

```bash
cd ../Client
npm install
```

Create a `.env` file inside `Client/`:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Start the frontend:

```bash
npm run dev
```

The app will run at `http://localhost:5173`.

---

## Payment Flow (Razorpay)

1. User selects a credit pack on the **Buy Credits** page
2. Frontend calls the backend `/api/user/pay-razor` endpoint
3. Backend creates a Razorpay order and returns the `order_id`
4. Frontend opens the Razorpay checkout modal
5. On success, backend verifies the payment signature and adds credits to the user's account

>  Use Razorpay **test keys** during development. Test card details are available in the [Razorpay test documentation](https://razorpay.com/docs/payments/payments/test-card-details/).

---

##  Environment Variables Reference

### Server (`Server/.env`)

| Variable | Description |
|----------|-------------|
| `PORT` | Port for the Express server |
| `MONGODB_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Secret key for signing JWTs |
| `CLIPDROP_API` | API key for the AI image generation service |
| `RAZORPAY_KEY_ID` | Razorpay public key |
| `RAZORPAY_KEY_SECRET` | Razorpay secret key |

### Client (`Client/.env`)

| Variable | Description |
|----------|-------------|
| `VITE_BACKEND_URL` | Base URL of the backend API |

---

##  Running in Test Mode

- Use Razorpay test API keys (prefix: `rzp_test_...`)
- Test payments won't charge real money
- MongoDB Atlas free tier works perfectly for local development

---

##  Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Razorpay 401 error | Ensure `dotenv.config()` is called before the Razorpay instance is initialized in `server.js` |
| MongoDB connection fails | Check DNS settings — try switching to Google DNS (8.8.8.8) and flush DNS cache |
| `.env` variables undefined | Confirm variable names match exactly (case-sensitive) |
| Backend URL not found | Check `VITE_BACKEND_URL` in Client `.env` matches the running server port |

---

---

##  Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

##  License

This project is open source and available under the [MIT License](LICENSE).

---

##  Author

**Viratt737** — [GitHub Profile](https://github.com/Viratt737)

---

*Built as a full-stack SaaS project.*