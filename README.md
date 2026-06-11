# Pixora

> AI-powered SaaS platform that converts text prompts into high-quality images.

Pixora lets users generate stunning AI images simply by describing what they want in words. Built as a full-stack web application with a credit-based system, secure authentication, integrated payments, and containerized deployment using Docker.

---

## Features

* AI Image Generation — Convert text prompts into high-quality images using generative AI models
* Credit System — Users consume credits per image generation and can purchase additional credits
* Razorpay Payment Integration — Secure payment flow for credit purchases
* JWT Authentication — Secure user registration and login
* MongoDB Atlas Integration — Cloud-hosted database
* React + Vite Frontend
* Node.js + Express Backend
* Dockerized Deployment
* Docker Compose Support for full-stack deployment

---

## Tech Stack

| Layer            | Technology                      |
| ---------------- | ------------------------------- |
| Frontend         | React, Vite, Axios, Context API |
| Backend          | Node.js, Express.js             |
| Database         | MongoDB Atlas, Mongoose         |
| Authentication   | JWT                             |
| Payments         | Razorpay                        |
| AI Service       | ClipDrop API                    |
| Containerization | Docker, Docker Compose          |

---

## Project Structure

```text
Pixora/
│
├── Client/
│   ├── src/
│   ├── Dockerfile
│   ├── .dockerignore
│   └── package.json
│
├── Server/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middlewares/
│   ├── Dockerfile
│   ├── .dockerignore
│   └── server.js
│
├── docker-compose.yml
│
└── README.md
```

---

## Environment Variables

### Server (.env)

```env
PORT=4000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLIPDROP_API=your_clipdrop_api_key

RAZORPAY_KEY_ID=your_razorpay_key

RAZORPAY_KEY_SECRET=your_razorpay_secret
```

### Client (.env)

```env
VITE_BACKEND_URL=http://localhost:4000
```

---

# Running Locally (Without Docker)

## Backend

```bash
cd Server
npm install
npm run server
```

Backend runs on:

```text
http://localhost:4000
```

## Frontend

```bash
cd Client
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# Docker Setup

## Build Backend Image

```bash
cd Server

docker build -t pixora-backend .
```

Run Backend Container:

```bash
docker run -d \
-p 4000:4000 \
--env-file .env \
--name pixora-backend \
pixora-backend
```

---

## Build Frontend Image

```bash
cd Client

docker build -t pixora-frontend .
```

Run Frontend Container:

```bash
docker run -d \
-p 5173:5173 \
--name pixora-frontend \
pixora-frontend
```

---

# Docker Compose Setup

Pixora includes a Docker Compose configuration for running the complete application stack.

## Start Services

```bash
docker compose up --build
```

or

```bash
docker-compose up --build
```

---

## Run in Background

```bash
docker compose up -d
```

---

## Stop Services

```bash
docker compose down
```

---

## Rebuild Containers

```bash
docker compose up --build --force-recreate
```

---

## View Logs

```bash
docker compose logs -f
```

---

# Application URLs

| Service     | URL                   |
| ----------- | --------------------- |
| Frontend    | http://localhost:5173 |
| Backend API | http://localhost:4000 |

---

# Payment Flow

1. User selects a credit package.
2. Frontend sends request to backend.
3. Backend creates Razorpay order.
4. Razorpay Checkout opens.
5. Payment verification is performed.
6. Credits are added to the user's account.

---

# Common Issues

### Docker Build Fails

Make sure Docker Desktop is running:

```bash
docker version
```

---

### Environment Variables Undefined

Verify:

```bash
.env
```

exists and contains all required variables.

---

### MongoDB Connection Error

* Check MongoDB Atlas whitelist settings
* Verify connection string
* Ensure internet connectivity

---

### Razorpay Authentication Error

Ensure:

```javascript
dotenv.config();
```

is initialized before creating the Razorpay instance.

---

# Author

Virat Trivedi

GitHub:
https://github.com/Viratt737

Repository:
https://github.com/Viratt737/Pixora

---

# License

This project is licensed under the MIT License.
