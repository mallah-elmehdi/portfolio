import { Box, Divider, IconButton, Stack } from '@mui/material';
import React from 'react';
import { ButtonLink, Dialog, Link, Logo } from '../../components';

// import { NAVBAR_PAGES } from '../../constants/navbar';
import { BsList, BsX } from 'react-icons/bs';
import { NAVBAR_PAGES } from '../../constants/navbar';
import { PAGES } from '../../constants/pages';

// ========== MENU TRANSITION

const Mobile = ({ sticky, hash }) => {
    // ========== DIALOG OPEN/CLOSE
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Logo md={!sticky} square />
            <Box ml="auto" gap={3} display="flex" alignItems="center" justifyContent="center">
                <IconButton sx={(theme) => ({ color: theme.palette.primary.main })} onClick={handleClickOpen}>
                    <BsList />
                </IconButton>
            </Box>
            <Dialog sx={{ '.MuiDialog-paper': { borderRadius: 0 } }} open={open} onClose={handleClose} fullScreen>
                <Box
                    sx={(theme) => ({
                        height: '100%',
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 5,
                    })}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        sx={(theme) => ({
                            pb: 3,
                        })}
                    >
                        <Logo square />
                        <IconButton color="primary" onClick={handleClose} sx={{ ml: 'auto' }}>
                            <BsX />
                        </IconButton>
                    </Stack>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            gap: 3,
                            flexDirection: 'column',
                        }}
                    >
                        {NAVBAR_PAGES.map((page, index) => (
                            <Link key={index} to={PAGES.landing.url + '#' + page.id} sx={{ width: 'fit-content' }} onClick={handleClose}>
                                <Stack spacing={0.5} width="fit-content">
                                    <ButtonLink
                                        sx={(theme) => ({
                                            color: theme.palette.primary.main,
                                            fontSize: theme.fontSize.lg,
                                        })}
                                    >
                                        {page.title}
                                    </ButtonLink>

                                    <Divider
                                        sx={(theme) => ({
                                            width: '100%',
                                            border: '1px solid',
                                            borderColor: theme.palette.secondary.main,
                                            opacity: page.id === hash ? 1 : 0,
                                            transition: 'all 0.5s ease',
                                        })}
                                    />
                                </Stack>
                            </Link>
                        ))}
                    </Box>
                </Box>
            </Dialog>
        </>
    );
};

export default Mobile;
