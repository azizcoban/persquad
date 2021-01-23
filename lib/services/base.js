const axios = require('axios').default;

export const cmsInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CMS_BASE_URL,
  timeout: 1000,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const apiInstance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 1000,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
