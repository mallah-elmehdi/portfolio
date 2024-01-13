import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { PAGES } from '../../constants/pages';
import { useScrollToTop } from '../../hooks';
import usePageTitle from '../../hooks/usePageTitle';

const Base = () => {
    // ========== VARIABLES
    const location = useLocation();

    // ========== GET TO THE TOP TO THE PAGE
    useScrollToTop();

    // ========= PAGE TITLE
    const [title, seTitle] = useState(PAGES.notFound.title);
    useEffect(() => {
        for (const key in PAGES) {
            if (Object.hasOwnProperty.call(PAGES, key)) {
                const element = PAGES[key];
                const list = location.pathname.split('/');
                if (list[list.length - 1] + '/' === element.url) {
                    seTitle(PAGES[key].title);
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    usePageTitle(title);

    return (
        <Box
            sx={(theme) => ({
                backgroundColor: theme.palette.common.white,
                minHeight: '100vh',
                minWidth: '100vw',
                height: '100%',
                width: '100%',
                position: 'relative',
            })}
        >
            <Outlet />
        </Box>
    );
};

export default Base;
