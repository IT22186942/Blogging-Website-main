# Blogging Website – Security Hardening and OAuth Integration

## Project and Members

- Member Name: ABishek S
- Index Number: IT22186942
- Group ID: 113

## Repository Links

- Original Project Repository (reference): [https://github.com/arjuncvinod/Blogging-Website.git]
- Modified Project Repository (after fixes): [https://github.com/IT22186942/Blogging-Website-main.git]

## Demo Video

- YouTube (vulnerabilities, fixes, and OAuth/OpenID Connect): [(https://youtu.be/zcmziy3CQWw)]

## Overview

This is a Node.js + Express + EJS blogging application backed by MongoDB (Mongoose). I assessed security, fixed two high‑risk issues (hardcoded MongoDB credentials and plaintext password storage), and implemented Google OAuth to strengthen authentication and usability.

### Tech Stack

- Backend: Node.js, Express, Mongoose
- Templating: EJS
- Authentication: express‑session, Google OAuth (Passport)
- Database: MongoDB

## What Was Fixed

- Removed hardcoded MongoDB credentials from source; now loaded from environment variables via dotenv.
- Replaced plaintext password storage with bcrypt hashing on signup and bcrypt.compare on login.
- Implemented Google OAuth (Passport Google Strategy) and added a "Sign in with Google" button on the login page.

## How to Run (Local)

1. Create a `.env` file in the project root with:

```
MONGODB_URI=mongodb://127.0.0.1:27017/myblog
SESSION_SECRET=change-me
GOOGLE_CLIENT_ID=[PASTE]
GOOGLE_CLIENT_SECRET=[PASTE]
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback
PORT=3000
```

2. Install dependencies:

```
npm install
```

3. Start the server:

```
node src/app.js
```

4. Access the application:

- Login page: http://localhost:3000/
- Google Sign‑in: http://localhost:3000/auth/google

## Notes for Reviewers

- Two high‑risk vulnerabilities were addressed: (1) hardcoded MongoDB credentials; (2) plaintext password storage.
- Further hardening recommended for production: CSP/HSTS via helmet, CSRF protection, secure session cookie flags, persistent session store, and dependency upgrades where safe.

## Credits

- Original project reference: [https://github.com/arjuncvinod/Blogging-Website.git]
- Modified by: ABishek S (IT22186942), Group 113
