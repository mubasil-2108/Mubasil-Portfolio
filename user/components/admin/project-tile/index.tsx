'use client';
import { Box, Card, CardActions, CardContent, CardMedia, Chip, Collapse, Divider, IconButton, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import { FaAngleLeft, FaAngleRight, FaAngleUp, FaGithub, FaGlobe, FaTrash } from 'react-icons/fa'
import toast from 'react-hot-toast';
import { deleteProject, fetchAllProjects } from '@/store/project-slice';
import { useAppDispatch } from '@/store/hooks';

interface Project {
    _id: string;
    projectName: string;
    projectImage: string[]; // This ensures it’s always an array of strings
    projectTechnologies: string[];
    gitHubUrl: string;
    websiteUrl: string;
    projectDescription: string;
}

interface AdminProjectTileProps {
  project: Project;
}

const ExpandMore = styled((props: { expand: boolean; onClick: () => void; 'aria-expanded': boolean; 'aria-label': string; children: React.ReactNode }) => {
     const { children, ...other } = props;
    return <IconButton {...other}>{children}</IconButton>;
})(({ expand }) => ({
    marginLeft: 'auto',
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    transition: 'transform 0.3s',
}));


const AdminProjectTile: React.FC<AdminProjectTileProps> = ({ project }) => {
    const [expanded, setExpanded] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const dispatch = useAppDispatch();
    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project?.projectImage.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project?.projectImage.length) % project?.projectImage.length);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleDeleteProject = async () => {
        await dispatch(deleteProject(project?._id)).then( async (data) => {
            if (data?.payload?.success) {
                toast.success(data?.payload?.message)
                await dispatch(fetchAllProjects());
            } else {
                toast.error(data?.payload?.message)
            }
        })
    }
    return (
        <Card key={project?._id} sx={{ width: '100%', height: 'auto', pb: expanded ? 2 : 0, borderRadius: '10px', border: '1px solid #ccc', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)', }}>
            <Box sx={{ position: 'relative' }}>
                <CardMedia
                    component='img'
                    width='100%'
                    sx={{height: '150px', objectFit: 'cover',  }}
                    image={project?.projectImage[currentImageIndex] || '../assets/defaultImage.jpg'}
                    alt='project-image'
                />
                {
                    project?.projectImage && project?.projectImage.length > 1 && (
                        <>
                            <IconButton
                                sx={{ position: 'absolute', top: '50%', left: 5, transform: 'translateY(-50%)', backgroundColor: 'rgba(255,255,255,0.7)', ":hover": { backgroundColor: 'rgba(255, 255, 255, 0.9)' } }}
                                onClick={handlePrevImage}
                            >
                                <FaAngleLeft />
                            </IconButton>
                            <IconButton
                                sx={{ position: 'absolute', top: '50%', right: 5, transform: 'translateY(-50%)', backgroundColor: 'rgba(255,255,255,0.7)', ":hover": { backgroundColor: 'rgba(255, 255, 255, 0.9)' } }}
                                onClick={handleNextImage}
                            >
                                <FaAngleRight />
                            </IconButton>
                        </>
                    )
                }
            </Box>
            <CardContent>
                <Box>
                    <Typography variant='h5' fontSize={20} fontWeight='bold'>{project?.projectName}</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
                    {project.projectTechnologies?.map((tech, index) => (
                        <Chip
                            key={index}
                            label={tech}
                            size="small"
                            variant="outlined"
                        />
                    ))}
                </Box>
            </CardContent>
            <Divider variant='middle' />
            <CardActions disableSpacing>
                <IconButton href={project?.gitHubUrl} aria-label='github' sx={{ color: '#000', "&:hover": { color: '#1b00ff99' },zIndex: 20 }}>
                    <FaGithub />
                </IconButton>
                <IconButton href={project?.websiteUrl} aria-label='website' sx={{ color: '#000', "&:hover": { color: '#1b00ff99' },zIndex: 20 }}>
                    <FaGlobe />
                </IconButton>
                <IconButton
                    aria-label='delete'
                    sx={{ color: '#000', "&:hover": { color: 'red' },zIndex: 20 }}
                    onClick={handleDeleteProject} // Assuming you have a function to handle delete
                >
                    <FaTrash />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={() => handleExpandClick()}
                    aria-expanded={expanded}
                    aria-label='show more'
                    sx={{zIndex: 20}}
                >
                    <FaAngleUp />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
                <Divider sx={{ mt: 1 }} variant='middle' />
                <CardContent sx={{ height: '200px', overflowY: 'scroll', mt: 1 }}>
                    <Box >
                        <Typography variant='body2' fontSize={14} color='text.secondary' textAlign='justify'>
                            {project?.projectDescription}
                        </Typography>
                    </Box>
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default AdminProjectTile