/** @format */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../utils/baseQuery';
import { DashboardStats } from '../../type/Comman';

export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',
  baseQuery: baseQuery,
  tagTypes: ['Dashboard'],
  endpoints: (builder) => ({
    getDashboardStats: builder.query<DashboardStats, void>({
      query: () => 'dashboard/stats',
      providesTags: ['Dashboard'],
    }),
    getRecentMilkCollections: builder.query<any[], { limit?: number }>({
      query: ({ limit = 10 }) => `dashboard/recent-collections?limit=${limit}`,
      providesTags: ['Dashboard'],
    }),
    getRecentPayments: builder.query<any[], { limit?: number }>({
      query: ({ limit = 10 }) => `dashboard/recent-payments?limit=${limit}`,
      providesTags: ['Dashboard'],
    }),
    getMonthlyStats: builder.query<any, { year: number; month: number }>({
      query: ({ year, month }) => `dashboard/monthly-stats?year=${year}&month=${month}`,
      providesTags: ['Dashboard'],
    }),
  }),
});

export const {
  useGetDashboardStatsQuery,
  useGetRecentMilkCollectionsQuery,
  useGetRecentPaymentsQuery,
  useGetMonthlyStatsQuery,
} = dashboardApi;


