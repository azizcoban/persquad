const axios = require('axios').default;

const cmsInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CMS_BASE_URL,
  timeout: 1000,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default cmsInstance;
