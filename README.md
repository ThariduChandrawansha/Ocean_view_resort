# Ocean View Resort - Full Stack Setup

This project consists of a Spring Boot backend and a React + Vite frontend.

## Prerequisites
- Java 17 or higher
- Node.js & npm
- MongoDB running locally on port 27017

## Backend Setup (Spring Boot)
1. Navigate to the `backend` directory.
2. Run the application using Maven:
   ```bash
   ./mvnw spring-boot:run
   ```
   (Note: You might need to make `mvnw` executable on Linux/Mac using `chmod +x mvnw`)
3. The API will be available at `http://localhost:8080`.
4. Endpoint to check DB connection: `GET http://localhost:8080/api/db-check`.

## Frontend Setup (React + Vite)
1. Navigate to the `frontend` directory.
2. Install dependencies (if not already done):
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. The frontend will be available at `http://localhost:5173`.

## Database
The backend is configured to connect to a MongoDB database named `tharindu_ocean_view_resort`.
- URI: `mongodb://localhost:27017/tharindu_ocean_view_resort`
