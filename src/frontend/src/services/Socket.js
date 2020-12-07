import io from 'socket.io-client';

export const socket = io('https://54.173.240.173:3333', { rejectUnauthorized: false });