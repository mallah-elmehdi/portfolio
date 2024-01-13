import { Avatar, Box, Container, Divider, Grid, Link as MuiLink, Stack, Typography, alpha } from '@mui/material';
import React from 'react';
import { BsFillEnvelopeAtFill, BsFillPhoneFill, BsLinkedin } from 'react-icons/bs';
import { Logo, Title } from '..';

const Footer = () => {
    return (
        <Box
            sx={(theme) => ({
                background: theme.palette.muted.main,
                py: 5,
            })}
        >
            <Container>
                <Grid container spacing={3}>
                    <Grid item md={4} xs={12}>
                        <Stack spacing={3} alignItems="flex-start">
                            <Logo white md square />
                        </Stack>
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <Stack spacing={3} alignItems="flex-start">
                            <Title noMargin white sm>
                                Contact
                            </Title>
                            <Typography
                                sx={(theme) => ({
                                    color: theme.palette.common.white,
                                    fontWeight: theme.fontWeight.bold,
                                    fontSize: theme.fontSize.md,
                                })}
                            >
                                Feel free to contact me !
                            </Typography>
                            <Box display="flex" alignItems="center" gap={2}>
                                <Avatar
                                    variant="square"
                                    sx={(theme) => ({
                                        backgroundColor: theme.palette.common.white,
                                        color: theme.palette.primary.dark,
                                    })}
                                >
                                    <BsLinkedin />
                                </Avatar>
                                <MuiLink underline="none" href="https://www.linkedin.com/in/mallah-elmehdi/" target="_blank">
                                    <Typography
                                        sx={(theme) => ({
                                            color: theme.palette.common.white,
                                            fontWeight: theme.fontWeight.bold,
                                            fontSize: theme.fontSize.md,
                                        })}
                                    >
                                        El Mehdi Mallah
                                    </Typography>
                                </MuiLink>
                            </Box>
                            <Box display="flex" alignItems="center" gap={2}>
                                <Avatar
                                    variant="square"
                                    sx={(theme) => ({
                                        backgroundColor: theme.palette.common.white,
                                        color: theme.palette.primary.dark,
                                    })}
                                >
                                    <BsFillPhoneFill />
                                </Avatar>
                                <Typography
                                    sx={(theme) => ({
                                        color: theme.palette.common.white,
                                        fontWeight: theme.fontWeight.bold,
                                        fontSize: theme.fontSize.md,
                                    })}
                                >
                                    +212 694 976 523
                                </Typography>
                            </Box>
                            <Box display="flex" alignItems="center" gap={2}>
                                <Avatar
                                    variant="square"
                                    sx={(theme) => ({
                                        backgroundColor: theme.palette.common.white,
                                        color: theme.palette.primary.dark,
                                    })}
                                >
                                    <BsFillEnvelopeAtFill />
                                </Avatar>
                                <Typography
                                    sx={(theme) => ({
                                        color: theme.palette.common.white,
                                        fontWeight: theme.fontWeight.bold,
                                        fontSize: theme.fontSize.md,
                                    })}
                                >
                                    contact@elmehdimallah.com
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider
                            sx={(theme) => ({
                                width: '100%',
                                borderColor: alpha(theme.palette.common.white, 0.5),
                            })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Stack spacing={3} alignItems="center">
                            <Typography
                                sx={(theme) => ({
                                    color: theme.palette.common.white,
                                    fontWeight: theme.fontWeight.light,
                                    fontSize: theme.fontSize.xs,
                                    textAlign: 'center',
                                })}
                            >
                                Use of this site constitutes acceptance of our User Agreement and Privacy Policy.
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
