import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Navbar } from '../../components';
import Bg from '../../assets/landing/header.jpg';

const Header = () => {
    return (
        <Box
            sx={(theme) => ({
                backgroundImage: `url(${Bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            })}
        >
            <Box
                sx={(theme) => ({
                    background: theme.gradient.alpha75_1,
                    py: 23,
                })}
            >
                <Navbar />

                <Container sx={{ flexGrow: 1 }}>
                    <Typography
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
                        })}
                    >
                        A SOFTWARE DEVELOPER
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
};

export default Header;
