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
                <Title>Projects I made</Title>

                <Grid container spacing={3} justifyContent="center">
                    {PROJECTS.map((item) => (
                        <Grid item md={4} sm={6} xs={12}>
                            <MuiLink underline="none" href={item.url} target="_blank">
                                <ProjectCard {...item} />
                            </MuiLink>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Projects;
