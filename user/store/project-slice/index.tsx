'use client'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface ProjectType {
  image: string[];
  projectName: string;
  projectDescription: string;
  gitHubUrl: string;
  websiteUrl: string;
  technologies: string[];
}


const initialState ={
    isLoading : false,
    projectList : [],
}
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const addNewProject = createAsyncThunk(
    'project/addNewProject',
    async (formData:ProjectType)=>{
        const result = await axios.post(`${API_URL}/api/admin/projects/add`,
            formData,
            {
                headers:{
                    "Content-Type": "application/json",
                }
            }
        )
        return result?.data;
    } 
)

export const fetchAllProjects = createAsyncThunk(
    'project/fetchAllProjects',
    async ()=>{
        const response = await axios.get(`${API_URL}/api/admin/projects/get`);
        return response?.data;
    }
)

export const deleteProject = createAsyncThunk(
    'project/deleteProject',
    async (id:string)=>{
        const response = await axios.delete(`${API_URL}/api/admin/projects/delete/${id}`);
        return response?.data;
    }
)

const AdminProductSlice = createSlice({
    name: 'adminProject',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(addNewProject.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(addNewProject.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.projectList = action.payload.data;
        })
        .addCase(addNewProject.rejected, (state)=>{
            state.isLoading = false;
            state.projectList = [];
        })
        .addCase(fetchAllProjects.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(fetchAllProjects.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.projectList = action.payload.data;
        })
        .addCase(fetchAllProjects.rejected, (state)=>{
            state.isLoading = false;
            state.projectList = [];
        })
    }
})

export default AdminProductSlice.reducer;