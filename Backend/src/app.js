import express from "express";

const app = express();


// Import routes 
import healthCheckRoutes from "./routes/healthcheck.routes.js"

app.use("/api/v1/healthcheck", healthCheckRoutes);


export default app;
