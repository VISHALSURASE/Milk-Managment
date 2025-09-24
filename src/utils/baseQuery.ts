/** @format */

import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.API_BASE_URL || 'http://localhost:3001/api',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('authToken');
    
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});

