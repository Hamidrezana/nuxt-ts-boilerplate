require('dotenv').config();

export const BASE_URL = process.env.NODE_ENV === 'production' ? '' : process.env.SERVER_BASE_URL;

export const API_BASE_URL = ``;
