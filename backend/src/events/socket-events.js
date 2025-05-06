export function registerSocketEvents(io) {
    io.on('connection', (socket) => {
        console.log('A user connected:', socket.id);

        socket.on('message', (message) => {
            console.log('Message received:', message);
        });

        socket.on('disconnect', () => {
            console.log('User disconnected:', socket.id);
        });

        // Ajoutez d'autres événements ici si nécessaire
    });
}