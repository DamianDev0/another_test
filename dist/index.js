"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const Router_1 = __importDefault(require("./routes/Router"));
const app = (0, express_1.default)();
// Middleware to parse JSON request bodies
app.use(express_1.default.json());
// Routes
app.use('/api', Router_1.default);
const startServer = async () => {
    try {
        await db_1.default.authenticate();
        console.log("Connected to the database successfully");
        await db_1.default.sync();
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    }
    catch (error) {
        console.error("Error starting server:", error);
        throw new Error("Error starting");
    }
};
startServer();
