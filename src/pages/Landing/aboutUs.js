import { Avatar, Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { Title } from '../../components';
// import { NAVBAR_PAGES } from '../../constants/navbar';
import { ABOUT_ME } from '../../constants/landing';

const AboutUs = () => {
    return (
        <Box
            // id={NAVBAR_PAGES[0].id}
            sx={{
                position: 'relative',
                // backgroundImage: `url(${Bg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left bottom',
                backgroundSize: 'contain',
            }}
        >
            <Container sx={{ alignSelf: 'center' }}>
                <Title>About me</Title>
                <Grid container spacing={10} alig nItems="center">
                    <Grid item md={6} xs={12}>
                        <Typography
                            sx={(theme) => ({
                                fontWeight: theme.fontWeight.light,
                                fontSize: theme.fontSize.lg,
                                color: theme.palette.common.black,
                                lineHeight: 2,
                                textAlign: 'justify',
                            })}
                        >
                            With over 4 years of experience as a software developer, I bring a wealth of expertise to the table. I excel in
                            every phase of the development cycle, translating ideas into production ready solutions. As a developer, I
                            leverage my comprehensive understanding of the development process to contribute to the creation of innovative
                            and efficient solutions.
                        </Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Stack spacing={1}>
                            {ABOUT_ME.map((item) => (
                                <Box display="flex" alignItems="center" gap={0.5}>
                                    <Avatar>{item.icon}</Avatar>
                                    <Typography
                                        sx={(theme) => ({
                                            fontWeight: theme.fontWeight.bold,
                                            fontSize: theme.fontSize.xl,
                                            color: theme.palette.common.black,
                                        })}
                                    >
                                        {item.title}
                                    </Typography>
                                </Box>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AboutUs;
