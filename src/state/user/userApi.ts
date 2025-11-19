import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {IApiResponse, IUser } from "../../../interfaces.ts";
import {responseErrorTransformer} from "@/lib/utils.ts";

const apiUrl = import.meta.env.VITE_API_URL;

let token;

if(localStorage.getItem('token')){
    token = localStorage.getItem('token') as string;
}else{
    token = sessionStorage.getItem('token') as string;
}

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl : apiUrl,
        credentials: 'include',
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }),
    endpoints: (build) => ({
        getUser : build.query<IApiResponse<IUser>,void>({
            query: () => ({
                url: "/user",
                method: "GET"
            }),
            transformErrorResponse: (response) => {
                responseErrorTransformer(response);
            }
        }),
        logOut: build.query<IApiResponse<void>, void>({
            query: () => '/logout'
        }),
        //Custom csrf tooken IF NEEDED
        getCookie : build.query<void,void>({
            query: () => '/csrf-cookie'
        })
    })
})

export const {
    useLazyGetCookieQuery,
    useGetUserQuery,
    useGetCookieQuery,
    useLazyGetUserQuery,
    useLazyLogOutQuery
} = userApi;