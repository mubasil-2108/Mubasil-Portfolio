'use client';
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Box, Button, Drawer, TextField, Typography } from '@mui/material'
import { addNewProject, fetchAllProjects } from "@/store/project-slice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import '@/app/globals.css';
import { FaProjectDiagram, FaSignOutAlt } from "react-icons/fa";
import AdminProjectTile from "@/components/admin/project-tile";
import ProjectImageUpload from "@/components/admin/image-upload";
import { logoutUser } from "@/store/auth-slice";



const initialState = {
    image: [],
    projectName: "",
    projectDescription: "",
    gitHubUrl: "",
    websiteUrl: "",
    technologies: [],
}

const AdminPage = () => {
    const [open, setOpen] = useState(false);
    const { projectList } = useAppSelector(state => state.adminProject);
    const [uploadedImageUrl, setUploadedImageUrl] = useState<string[]>([]);
    const [selectedImage, setSelectedImage] = useState<string[]>([]);
    const [files, setFiles] = useState<File[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useAppDispatch();

    const toggleDrawer = (newOpen: boolean) => {
        setOpen(newOpen);
    };

    const handleLogout = () => {
        dispatch(logoutUser()).then((data) => {
            if (data?.payload?.success) {
                toast.success(data?.payload?.message);
            } else {
                toast.error(data?.payload?.message);
            }
        })
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;
        if (!fileList) return; // ✅ Prevent null from causing error

        const files = Array.from(fileList);
        if (files.length > 0) {
            const newImages = files.map((file) => URL.createObjectURL(file));
            setSelectedImage(prev => [...prev, ...newImages]);
            setFiles(prev => [...prev, ...files]);

            if (selectedImage.length === 0) {
                setCurrentIndex(0);
            }
        }
    };


    const handleNextImage = () => {
        if (selectedImage.length === 0) return;
        setCurrentIndex((prev) => (prev + 1) % selectedImage.length);
    }

    const handlePrevImage = () => {
        if (selectedImage.length === 0) return;
        setCurrentIndex((prev) => (prev - 1 + selectedImage.length) % selectedImage.length);
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await dispatch(addNewProject({
            ...formData,
            image: uploadedImageUrl
        })).then(async (data) => {
            if (data?.payload?.success) {
                toast.success(data?.payload?.message);
                await dispatch(fetchAllProjects());
                setOpen(false);
                setSelectedImage([]);
                setFiles([]);
                setFormData(initialState);
            }
        })
    }

    useEffect(() => {
        const fetchProjects = async () => {
            await dispatch(fetchAllProjects());
        };
        fetchProjects();
    }, [dispatch]);
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', padding: '1rem' }}>
            <Box sx={{ pt: 10, pb: 8, px: 2, }}>
                <Box className="btn-box" sx={{ gap: 2 }} >
                    <Button startIcon={<FaSignOutAlt />} onClick={() => handleLogout()} variant='contained' sx={{ background: '#000000', zIndex: 20 }}>
                        Log Out
                    </Button>
                    <Button onClick={() => toggleDrawer(true)} variant='contained' sx={{ background: '#000000', zIndex: 20 }}>
                        Add New Project
                    </Button>
                </Box>
                <Box className='grid-container' sx={{ mt: 5, mb: 10 }}>
                    {
                        projectList && projectList.length > 0 ?
                            projectList.map((item) => (
                                <AdminProjectTile key={item?._id || item?.id} project={item} />
                            ))
                            :
                            null
                    }
                </Box>
                <Drawer open={open} anchor='right' onClose={() => toggleDrawer(false)}>
                    <Box sx={{ width: 380, padding: 2, overflowX: 'hidden', overflowY: 'auto' }} role="presentation" >
                        <Box mt={5} display='flex' gap={2} alignItems='center'>
                            <Typography variant='h4' fontSize={25} fontWeight='bold'>Add New Project</Typography>
                            <FaProjectDiagram size={30} />
                        </Box>
                        <ProjectImageUpload
                            currentIndex={currentIndex}
                            isHovered={isHovered}
                            handleImageChange={handleImageChange}
                            handleNextImage={handleNextImage}
                            handlePrevImage={handlePrevImage}
                            selectedImage={selectedImage}
                            setIsHovered={setIsHovered}
                            setUploadedImageUrl={setUploadedImageUrl}
                            files={files}
                        />
                        <form action="#" onSubmit={onSubmit}>
                            <Box
                                component='div'
                                sx={{ '& > :not(style)': { width: '100%', mt: 3 } }}
                            >
                                <TextField
                                    required
                                    sx={{
                                        '& .MuiInputBase-root': { height: 45, },
                                        '& .MuiInputLabel-root': { fontSize: '12px' }, // Reduces label font size
                                        '& .MuiInputLabel-root.Mui-focused': { fontSize: '12px' } // Keeps size small when focused
                                    }}
                                    value={formData.projectName}
                                    onChange={(e) => setFormData({
                                        ...formData,
                                        projectName: e.target.value
                                    })}
                                    id='outlined-basic' label='Project Name' variant='outlined' />
                            </Box>
                            <Box
                                component='div'
                                sx={{ '& > :not(style)': { width: '100%', mt: 2 } }}
                            >
                                <TextField
                                    sx={{
                                        // '& .MuiInputBase-root': { height: 45, },
                                        '& .MuiInputLabel-root': { fontSize: '12px' }, // Reduces label font size
                                        '& .MuiInputLabel-root.Mui-focused': { fontSize: '12px' } // Keeps size small when focused
                                    }}
                                    multiline
                                    value={formData.projectDescription}
                                    onChange={(e) => setFormData({
                                        ...formData,
                                        projectDescription: e.target.value
                                    })}
                                    rows={4}
                                    id='outlined-multiline-static' label='Project Description' variant='outlined' />
                            </Box>
                            <Box
                                component='div'
                                sx={{ '& > :not(style)': { width: '100%', mt: 2 } }}
                            >
                                <TextField
                                    sx={{
                                        '& .MuiInputBase-root': { height: 45, },
                                        '& .MuiInputLabel-root': { fontSize: '12px' }, // Reduces label font size
                                        '& .MuiInputLabel-root.Mui-focused': { fontSize: '12px' } // Keeps size small when focused
                                    }}
                                    value={formData.gitHubUrl}
                                    onChange={(e) => setFormData({
                                        ...formData,
                                        gitHubUrl: e.target.value
                                    })}
                                    id='outlined-basic' label='GitHub Link' variant='outlined' />
                            </Box>
                            <Box
                                component='div'
                                sx={{ '& > :not(style)': { width: '100%', mt: 2 } }}
                            >
                                <TextField
                                    sx={{
                                        '& .MuiInputBase-root': { height: 45, },
                                        '& .MuiInputLabel-root': { fontSize: '12px' }, // Reduces label font size
                                        '& .MuiInputLabel-root.Mui-focused': { fontSize: '12px' } // Keeps size small when focused
                                    }}
                                    value={formData.websiteUrl}
                                    onChange={(e) => setFormData({
                                        ...formData,
                                        websiteUrl: e.target.value
                                    })}
                                    id='outlined-basic' label='Website Link (Optional)' variant='outlined' />
                            </Box>
                            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                                <Button type='submit' variant='contained' sx={{ background: '#000000' }}>Add Project</Button>
                            </Box>
                        </form>
                    </Box>
                </Drawer>
            </Box>
        </Box>
    )
};

export default AdminPage;