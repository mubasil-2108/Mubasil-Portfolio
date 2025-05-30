'use client'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface AuthState {
    email: string;
    password: string;
}

interface VerifyOtpState {
    email: string;
    otp: string;
}

const initialState = {
    isAuthenticated: false,
    isLoading: true,
    user: null,
}
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const registerUser = createAsyncThunk(
    'auth/register',
    async (formData: AuthState) => {
        const response = await axios.post(`${API_URL}/api/auth/register`,
            formData,
            {
                withCredentials: true
            }
        )
        return response.data;
    }
)

export const loginUser = createAsyncThunk(
    'auth/login',
    async (formData: AuthState) => {
        const response = await axios.post(`${API_URL}/api/auth/login`,
            formData,
            {
                withCredentials: true
            }
        )
        return response.data;
    }
)

export const forgetPassword = createAsyncThunk(
    'auth/forgetpassword',
    async (formData) => {
        const response = await axios.post(`${API_URL}/api/auth/forget-password`,
            formData,
            {
                withCredentials: true
            }
        )
        return response.data;
    },
    {
        condition: (formData: AuthState) => {
            return Boolean(formData?.email);
        }
    }
)

export const sendOtp = createAsyncThunk(
    'auth/forgetpassword/sendotp',
    async (email: string) => {
        const response = await axios.post(`${API_URL}/api/auth/send-otp`,
            { email },
            {
                withCredentials: true
            }
        )
        return response.data;
    }
)

export const verifyOtp = createAsyncThunk(
    'auth/forgetpassword/verifyotp',
    async (formData: VerifyOtpState) => {
        const response = await axios.post(`${API_URL}/api/auth/verify-otp`,
            formData,
            {
                withCredentials: true
            }
        )
        return response.data;
    }
)

export const logoutUser = createAsyncThunk(
    'auth/logout',
    async () => {
        const response = await axios.post(`${API_URL}/api/auth/logout`,
            {},
            {
                withCredentials: true
            }
        )

        return response.data;
    }
)

export const checkAuth = createAsyncThunk(
    'auth/checkauth',
    async () => {
        const token = sessionStorage.getItem('token');
        const parsedToken = token ? JSON.parse(token) : null;

        if (!parsedToken) {
            throw new Error("No token found");
        }
        const response = await axios.get(`${API_URL}/api/auth/check-auth`,
            {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${parsedToken}`,
                    "Cache-Control":
                        "no-store, no-cache, must-revalidate, proxy-revalidate",
                }
            }
        )

        return response.data;
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: () => { },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
            })
            .addCase(registerUser.rejected, (state) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.success ? action.payload.user : null;
                state.isAuthenticated = action.payload.success;
                sessionStorage.setItem('token', JSON.stringify(action.payload.token));
            })
            .addCase(loginUser.rejected, (state) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
            })
            .addCase(checkAuth.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.success ? action.payload.user : null;
                state.isAuthenticated = action.payload.success;
            })
            .addCase(checkAuth.rejected, (state) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
            })
            .addCase(sendOtp.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(sendOtp.fulfilled, (state) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
            })
            .addCase(sendOtp.rejected, (state) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
            })
            .addCase(verifyOtp.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(verifyOtp.fulfilled, (state) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
            })
            .addCase(verifyOtp.rejected, (state) => {
                state.isLoading = false;
                state.user = null;
                state.isAuthenticated = false;
            })
    }
})
export const { setUser } = authSlice.actions;
export default authSlice.reducer;