# Flask JWT Authentication with MongoDB 🔐

A simple and secure Flask backend API for user **sign-up** and **login** using MongoDB as the database.  
Passwords are hashed with **bcrypt**, and user sessions are managed with **JWT tokens**.  

## Features 🚀
- User registration with hashed passwords 🛡️  
- User login with JWT token generation 🎟️  
- Token verification decorator for protected routes 🔑  
- CORS enabled for frontend integration 🌐  

## Tech Stack 🧰
- Flask  
- MongoDB  
- bcrypt  
- PyJWT  
- Flask-CORS  

## API Endpoints 🛠️
- `POST /signup` — Register new user  
- `POST /login` — Authenticate and receive JWT token  

## Usage 💻
1. Clone the repo  
2. Install dependencies:  
    ```bash
    pip install -r requirements.txt

