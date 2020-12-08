import io from 'socket.io-client';
import { URL } from '../_constants/URL_API';

export const socket = io(URL, { rejectUnauthorized: false });