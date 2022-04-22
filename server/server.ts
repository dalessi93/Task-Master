if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

// Requirements
import express, { Request, Response } from "express";
import path from "path";
import { db } from './database/db';
import expressSession from 'express-session';
const pgSession = require('connect-pg-simple')(expressSession);

// Imports
import signupController from './controllers/users/index';
import sessionController from './controllers/session/index';

const PORT =
    process.env.PORT || (process.env.NODE_ENV === "production" && 3000) || 3001;
const app = express();

app.set("trust proxy", 1);

app.use(
    expressSession({
        store: new pgSession({
            pool: db, // Connects to our postgres db
            createTableIfMissing: true, // Creates a session table in your database
        }),
        secret: process.env.SESSION_SECRET, // Needs a secret key to keep session data secure
        resave: false,
        saveUninitialized: false,
    })
);

app.get("/api/test", (req: Request<any, any, any, any>, res: Response<any>) => {
    res.json({ date: new Date().toString() });
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "..", "client", "build")));

    app.get("/*", (req, res) => {
        res.sendFile(
            path.join(__dirname, "..", "client", "build", "index.html")
        );
    });
}

// Controllers
app.use('/api/signup', signupController);
app.use('/api/session', sessionController);


app.listen(+PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});