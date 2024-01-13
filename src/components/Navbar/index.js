import { AppBar, Container, Toolbar, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useScrollPosition } from '../../hooks';
import Desktop from './Desktop';
import Mobile from './Mobile';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const md = useMediaQuery((theme) => theme.breakpoints.up('md'));

    // ---------- url hash id
    const { hash } = useLocation();

    // const scrollDirection = useScrollDirection();
    const scrollPosition = useScrollPosition();
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        setSticky(scrollPosition >= 30);
    }, [scrollPosition]);

    return (
        <AppBar
            position="fixed"
            sx={(theme) => ({
                backgroundColor: sticky ? theme.palette.common.white : 'transparent',
                // backgroundColor: theme.palette.common.white,
                boxShadow: sticky ? theme.shadows.default : 'none',
                transition: 'all .3s ease',
                // position: '-webkit-sticky',
                // backgroundSize: 'cover',
                // backgroundRepeat: 'no-repeat',
                // backgroundPosition: 'top',
                // top: sticky ? 0 : '-8rem',
            })}
        >
            <Container>
                <Toolbar sx={{ py: 3 }}>
                    {md ? (
                        <Desktop hash={hash.replace('#', '')} sticky={sticky} />
                    ) : (
                        <Mobile sticky={sticky} hash={hash.replace('#', '')} />
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
