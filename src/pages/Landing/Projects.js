import { Box, Container, Grid, Link as MuiLink } from '@mui/material';
import React from 'react';
import { ProjectCard, Title } from '../../components';
// import { NAVBAR_PAGES } from '../../constants/navbar';
import { PROJECTS } from '../../constants/landing';
import { NAVBAR_PAGES } from '../../constants/navbar';

const Projects = () => {
    return (
        <Box
            id={NAVBAR_PAGES[0].id}
            sx={{
                position: 'relative',
                // backgroundImage: `url(${Bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left bottom',
                backgroundSize: 'contain',
            }}
        >
            <Container sx={{ alignSelf: 'center' }}>
                <Title
                    label="projects"
                    title1="Latest"
                    title2="Projects"
                    bold2
                    sloganSize="xl"
                    slogan="latest projects merges cutting-edge technology with unparalleled design, delivering a transformative experience that exceeds expectations"
                />

                <Grid container spacing={5} mt={5} justifyContent="center">
                    {PROJECTS.map((item) => (
                        <Grid item md={4} sm={6} xs={12}>
                            <ProjectCard {...item} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Projects;
