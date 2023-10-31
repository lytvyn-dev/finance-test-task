import io from 'socket.io-client';

export const SERVER_PATH = 'http://localhost:4000';

export const socket = io(SERVER_PATH);
