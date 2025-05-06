import express from 'express';
import { createServer as createHttpServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { corsOptions } from './config/socket-config.js';
import { registerSocketEvents } from './events/socket-events.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Définir __dirname pour les modules ES
//console.log('import.meta.url', import.meta.url);

const __filename = fileURLToPath(import.meta.url);
//console.log('__filename', __filename);
const __dirname = path.dirname(__filename);
//console.log('__dirname', __dirname);

export function createServer() {
    const app = express();
    const server = createHttpServer(app);
    const io = new Server(server, {
        cors: corsOptions,
    });

    app.use(cors());
    // Servir les fichiers statiques du frontend si frontend est dans backend
    //const frontendPath = path.resolve('frontend');

    // Servir les fichiers statiques du frontend si frontend est à la racine
    //const frontendPath = path.resolve(__dirname, '../../frontend');

    // Servir les fichiers statiques du frontend en production en utilisant le framework react depuis vitejs
    const frontendPath = path.resolve(__dirname, '../../frontend/dist');

    app.use(express.static(frontendPath));


    // Route par défaut pour servir index.html
    app.get('*', (req, res) => {
        res.sendFile(path.join(frontendPath, 'index.html'));
    });

    // Enregistrer les événements Socket.IO
    registerSocketEvents(io);

    return { app, server, io };
}