import express from "express";

const app = express();

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Data sanitization against NoSQL query injection

// Data sanitization against XSS

// Prevent parameter pollution

export {app}