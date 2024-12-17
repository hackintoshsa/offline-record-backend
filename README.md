Project Setup and Instructions

This repository contains the backend API built with Node.js, Express, and PostgreSQL, as well as the frontend app built using Quasar Framework and Capacitor.
Table of Contents

    Backend API Setup
    Frontend (Quasar Capacitor) Setup

Backend API Setup
1. Clone the Repository

git clone https://github.com/your-username/project-name.git
cd project-name

2. Install Dependencies

Navigate to the backend directory and install the necessary dependencies.

cd backend
npm install

3. Set Up Environment Variables

Create a .env file in the root directory of the backend project to store sensitive environment variables. For example:

DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=3000

    DATABASE_URL: The connection string for your PostgreSQL database. Example format: postgres://user:password@localhost:5432/database_name.
    JWT_SECRET: Secret key used to sign and verify JWT tokens.
    PORT: The port your API server will run on (default is 3000).

4. Set Up PostgreSQL Database

Ensure that PostgreSQL is installed and running on your local machine. If you haven't created the database yet, you can create it manually or use the following commands:

CREATE DATABASE your_database_name;
CREATE TABLE users (
id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
username VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL
);
CREATE TABLE records (
id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
title VARCHAR(255) NOT NULL,
description TEXT,
barcode VARCHAR(255),
updated_at TIMESTAMPTZ DEFAULT NOW()
);

Make sure your PostgreSQL instance is configured properly and the tables are created.
5. Run the Backend API

After installing dependencies and configuring the environment variables, start the backend API:

npm run start

The server will be running at http://localhost:3000.
6. Testing the Backend API

You can test the backend API using tools like Postman or by sending HTTP requests from your frontend app. Ensure the following routes are functional:

    POST /register: Register a new user.
    POST /login: Login to authenticate and obtain a JWT token.
    GET /records: Fetch all records (authentication required).
    POST /records: Add a new record (authentication required).
    PUT /records/:id: Update an existing record (authentication required).
    POST /sync: Sync local records with the backend (authentication required).

Frontend (Quasar Capacitor) Setup
1. Install Quasar CLI

If you don't have the Quasar CLI installed, you can install it globally using the following command:

npm install -g @quasar/cli

2. Clone the Repository and Install Dependencies

Navigate to the frontend directory and install the required dependencies:

cd frontend
npm install

3. Set Up Environment Variables

If your frontend requires environment variables (like an API URL or JWT token), create a .env file in the root of the frontend project:

VUE_APP_API_URL=http://localhost:3000/api

    VUE_APP_API_URL: The URL where the backend API is hosted (e.g., http://localhost:3000/api).

4. Run the Quasar App in Development Mode

After installing dependencies, run the following command to start the Quasar development server:

quasar dev

This will start the Quasar development server, and the frontend app will be accessible in your browser at http://localhost:8080.
5. Run the App on Mobile (Capacitor)

To run the app on a mobile device, you'll need Capacitor and a native development environment set up. Follow the steps below:

    Install Capacitor Dependencies:

npm install @capacitor/core @capacitor/cli

    Add a Platform (iOS/Android):

For iOS:

quasar mode add capacitor
quasar capacitor add ios

For Android:

quasar mode add capacitor
quasar capacitor add android

    Build and Sync the App:

After adding the desired platform(s), you can build and sync the app with Capacitor:

quasar build
quasar capacitor sync

    Run the App on a Device:

For iOS:

quasar capacitor open ios

For Android:

quasar capacitor open android

This will open the platform-specific IDE (Xcode for iOS, Android Studio for Android), allowing you to run the app on an emulator or physical device.
Key Features of the App

    Login: User authentication with JWT.
    Offline Storage: Use SQLite (or IndexedDB) to store records locally.
    Record Management:
        Create, view, edit, and delete records.
        All actions work offline and sync with the backend when the user is online.
    Sync to Backend: Upload all locally stored records to the backend.
    QR Scanner: Option to scan barcodes and add them to a record’s barcode field.

Troubleshooting

    Ensure PostgreSQL is running and accessible from the backend.
    Make sure all dependencies are installed correctly for both backend and frontend.
    Ensure proper setup of Capacitor for running on mobile platforms.

If you run into any issues, feel free to check the logs for errors or consult the official documentation for Node.js, PostgreSQL, and Quasar.
License

This project is licensed under the MIT License.

This README covers setting up both the backend API and the frontend Quasar Capacitor app. Let me know if you need further assistance!