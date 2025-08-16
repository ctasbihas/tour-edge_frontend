import { baseApi } from "@/redux/baseApi";

const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (credentials) => ({
				url: "/auth/login",
				method: "POST",
				body: credentials,
			}),
		}),
		register: builder.mutation({
			query: (userData) => ({
				url: "/user/register",
				method: "POST",
				body: userData,
			}),
		}),
	}),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
