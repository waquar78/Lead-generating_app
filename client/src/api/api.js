import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const leadApi = createApi({
  reducerPath: 'leadApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_LEAD_URL }),
  credentials: "include",
  tagTypes: ['Lead'],
  endpoints: (builder) => ({
    // Create lead
    createLead: builder.mutation({
      query: (newLead) => ({
        url: 'generate',
        method: 'POST',
        body: newLead,
      }),
      invalidatesTags: ['Lead'],
    }),

    // Get all leads
    getLeads: builder.query({
      query: () => 'all',
      providesTags: ['Lead'],
    }),

    // Delete lead
    deleteLead: builder.mutation({
      query: (id) => ({
        url: `delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Lead'],
    }),
  }),
});

export const { useCreateLeadMutation, useGetLeadsQuery, useDeleteLeadMutation } = leadApi;
