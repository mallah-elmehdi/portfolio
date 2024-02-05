import React from 'react';
import { Box, Typography, Container, Grid, Avatar, Stack } from '@mui/material';
import { Navbar } from '../../components';
import HeaderImage from '../../assets/landing/header.jpg';

const Header = () => {
    return (
        <Box
            sx={(theme) => ({
                // backgroundImage: `url(${Bg})`,
                // backgroundSize: 'cover',
                // backgroundPosition: 'center',
            })}
        >
            <Box
                sx={(theme) => ({
                    // background: theme.gradient.alpha75_1,
                    pt: 15,
                })}
            >
                <Navbar />
                <Container sx={{ flexGrow: 1 }}>
                    {/* <Typography
                        sx={(theme) => ({
                            fontWeight: theme.fontWeight.bold,
                            fontSize: theme.fontSize['5xl'],
                            color: theme.palette.common.white,
                            textAlign: 'center',
                            lineHeight: 1.2,
                        })}
                    >
                        HELLO! I'M
                    </Typography>
                    <Typography
                        sx={(theme) => ({
                            fontSize: theme.fontSize['8xl'],
                            color: theme.palette.common.white,
                            textAlign: 'center',
                            fontFamily: "'Smooch', cursive",
                            lineHeight: 1.2,
                        })}
                    >
                        el mehdi mallah
                    </Typography>
                    <Typography
                        sx={(theme) => ({
                            fontWeight: theme.fontWeight.extralight,
                            fontSize: theme.fontSize['3xl'],
                            color: theme.palette.common.white,
                            textAlign: 'center',
                            lineHeight: 1.2,
                            textTransform: 'uppercase',
                        })}
                    >
                        A Web Developer / Designer
                    </Typography> */}

                    <Grid container alignItems="center" spacing={10}>
                        <Grid item md={5} xs={12}>
                            <Stack width="fit-content" mx="auto" position="relative">
                                <Box
                                    sx={(theme) => ({
                                        width: { md: 400, sm: 500, xs: 300 },
                                        height: { md: 400, sm: 500, xs: 300 },
                                        position: 'absolute',
                                        backgroundColor: theme.palette.secondary.main,
                                        borderRadius: theme.borderRadius.full,
                                        top: -20,
                                        left: -2,
                                        boxShadow: theme.shadows[10],
                                    })}
                                />
                                <Box
                                    sx={(theme) => ({
                                        width: { md: 400, sm: 500, xs: 300 },
                                        height: { md: 400, sm: 500, xs: 300 },
                                        position: 'absolute',
                                        backgroundColor: theme.palette.primary.main,
                                        borderRadius: theme.borderRadius.full,
                                        top: 10,
                                        left: 15,
                                        boxShadow: theme.shadows[10],
                                    })}
                                />
                                <Avatar
                                    src={HeaderImage}
                                    sx={(theme) => ({
                                        width: { md: 400, sm: 500, xs: 300 },
                                        height: { md: 400, sm: 500, xs: 300 },
                                        boxShadow: theme.shadows[10],
                                    })}
                                />
                            </Stack>
                        </Grid>
                        <Grid item md={7} xs={12}>
                            <Stack alignItems="center">
                                <Typography
                                    sx={(theme) => ({
                                        fontWeight: theme.fontWeight.bold,
                                        fontSize: { sm: theme.fontSize['5xl'], xs: theme.fontSize['4xl'] },
                                        color: theme.palette.common.black,
                                        textAlign: 'center',
                                        lineHeight: 1.2,
                                    })}
                                >
                                    HELLO! I'M
                                </Typography>
                                <Typography
                                    sx={(theme) => ({
                                        fontSize: { sm: theme.fontSize['8xl'], xs: theme.fontSize['6xl'] },
                                        color: theme.palette.common.black,
                                        textAlign: 'center',
                                        fontFamily: "'Smooch', cursive",
                                        lineHeight: 1.2,
                                    })}
                                >
                                    el mehdi mallah
                                </Typography>
                                <Typography
                                    component="span"
                                    sx={(theme) => ({
                                        fontWeight: theme.fontWeight.extralight,
                                        fontSize: theme.fontSize['3xl'],
                                        color: theme.palette.primary.main,
                                        textAlign: 'center',
                                        lineHeight: 1.2,
                                        textTransform: 'uppercase',
                                        backgroundColor: theme.palette.secondary.main,
                                    })}
                                >
                                    A Web Developer / Designer
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Header;
