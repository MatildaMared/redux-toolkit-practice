import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DOGS_API_KEY = "ebbb4afc-632b-4df3-acba-543f4bf15161";

interface Breed {
	id: string;
	name: string;
	image: {
		url: string;
	};
}

export const dogsApiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://api.thedogapi.com/v1",
		prepareHeaders: (headers) => {
			headers.set("x-api-key", DOGS_API_KEY);
			return headers;
		},
	}),
	endpoints: (builder) => {
		return {
			fetchBreeds: builder.query<Breed[], number | void>({
				query: (limit = 10) => {
					return `/breeds?limit=${limit}`;
				},
			}),
		};
	},
});

export const { useFetchBreedsQuery } = dogsApiSlice;