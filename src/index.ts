import "reflect-metadata";
import express from "express";
import sequelize from "./config/db";
import router from "./routes/Router";
import cors from 'cors';

const app = express();

// Enable CORS with specific options
app.use(cors({
  origin: 'http://localhost:3001', // Cambia esto según el origen permitido
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Encabezados permitidos
}));

// Middleware to parse JSON request bodies
app.use(express.json());

// Routes
app.use('/api', router);

// Start server
const startServer = async () => {
  try {
    await sequelize.authenticate(); // Authenticate the connection
    console.log("Connected to the database successfully");
    await sequelize.sync();
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.error("Error starting server:", error);
    throw new Error("Error starting");
  }
};

startServer();
