import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 3001; // Port pour le serveur Socket.IOS

export const corsOptions = {
    origin: process.env.NODE_ENV === "production" ? process.env.CLIENT_ORIGIN : "*", // Remplacez par l'URL de votre client
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
    transports: ["websocket", "polling"],
    pingInterval: 25000,
    pingTimeout: 60000,
};

