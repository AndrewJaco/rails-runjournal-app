export const API_URL = process.env.NODE_ENV === 'production' 
  ? 'http://mocked-url.com'
  : import.meta.env.VITE_API_URL