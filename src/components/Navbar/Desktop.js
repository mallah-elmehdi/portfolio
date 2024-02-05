import { Box, Divider, Stack } from '@mui/material';
import React from 'react';
import { ButtonLink, Link, Logo } from '..';

// import { NAVBAR_PAGES } from '../../constants/navbar';
import { NAVBAR_PAGES } from '../../constants/navbar';
import { PAGES } from '../../constants/pages';

const Desktop = ({ sticky, hash }) => {
    return (
        <>
            {/* <Logo md={!sticky} white={!sticky} square /> */}
            <Logo md={!sticky} square />
            <Box sx={{ display: 'flex', gap: 3, ml: 'auto' }}>
                {NAVBAR_PAGES.map((page, index) => (
                    <Link to={PAGES.landing.url + '#' + page.id}>
                        <Stack spacing={0.5}>
                            <ButtonLink
                                sx={(theme) => ({
                                    // color: !sticky ? theme.palette.common.white : theme.palette.primary.main,
                                    color: theme.palette.primary.main,
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
        </>
    );
};

export default Desktop;
