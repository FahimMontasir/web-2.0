import express, { Application } from "express";
import cors from "cors";
import userRoutes from "./modules/user/user.route";

const app: Application = express();
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/v1/user", userRoutes);

export default app;
