import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
    type bodyRegister,
    type IApiResponse,
    type IPinCheckBody
} from "../../../interfaces.ts";
import { responseErrorTransformer } from "@/lib/utils.ts";

const apiUrl = import.meta.env.VITE_API_URL;

export const authApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl : apiUrl,
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }),
    endpoints: (build) => ({
        logUserIn : build.mutation<IApiResponse<{ user: string }>, bodyRegister>({
            query: (userData) => ({
                url: "/login",
                method: "POST",
                body: userData
            }),
            transformErrorResponse: (response) => {
                return responseErrorTransformer(response)
            }
        })
        ,
        registerUser : build.mutation<IApiResponse<void>, bodyRegister>({
            query: (userData) => ({
                url: "/register",
                method: "POST",
                body: userData
            }),
            transformErrorResponse: (response) => {
                return responseErrorTransformer(response)
            }
        }),
        verifyUser: build.query<IApiResponse<{token : string}>,string>({
            query: (token) => `/verify/${token}`,
            transformErrorResponse: (response) => {
                return responseErrorTransformer(response)
            }
        }),
        sendPasswordResetEmail : build.mutation<IApiResponse<void>,string>({
            query: (email) => ({
                url: '/passwordReset',
                method: "POST",
                body: {email : email}
            }),
            transformErrorResponse: (response) => responseErrorTransformer(response)
        }),
        checkPinPassword: build.mutation<IApiResponse<void>, IPinCheckBody>({
            query: (body) => ({
                url: '/pinCheck',
                method: "POST",
                body: body
            }),
            transformErrorResponse: (response) => responseErrorTransformer(response)
        }),
        resetPassword: build.mutation<IApiResponse<void>, {email: string, password: string}>({
            query: (body) => ({
                url: '/changePassword',
                method: "PUT",
                body: body
            }),
            transformErrorResponse: (response) => responseErrorTransformer(response)
        }),
        resendVerifyAccount: build.mutation<IApiResponse<void>, string>({
            query: (email) => ({
                url: '/resendVerify',
                method: "PUT",
                body: { email:  email }
            })
        }),
        logUserGoogle: build.mutation<IApiResponse<{ token : string }>,string>({
            query: (googleId) => ({
                url: '/googleLogin',
                method: "POST",
                body: { googleId : googleId }
            }),
            transformErrorResponse: (response) => responseErrorTransformer(response)
        }),
        logUserFacebook: build.mutation<IApiResponse<{ token : string }>,string>({
            query: (facebookId) => ({
                url: '/facebookLogin',
                method: "POST",
                body: { facebookId : facebookId }
            }),
            transformErrorResponse: (response) => responseErrorTransformer(response)
        })

    })
})

export const {
    useLogUserInMutation,
    useRegisterUserMutation,
    useLazyVerifyUserQuery,
    useCheckPinPasswordMutation,
    useSendPasswordResetEmailMutation,
    useResetPasswordMutation,
    useLogUserGoogleMutation,
    useLogUserFacebookMutation,
    useResendVerifyAccountMutation
} = authApi;