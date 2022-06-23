import axios from 'axios';

const HEADERS = {
  'Content-Type': 'application/json',
};

const requestSettings = {
  baseURL: `http://localhost:3001`,
  headers: HEADERS,
};

export const http = axios.create(requestSettings);
