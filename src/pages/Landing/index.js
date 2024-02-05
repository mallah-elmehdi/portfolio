import { Stack } from '@mui/material';
import React from 'react';
import { Footer, Navbar } from '../../components';
import Header from './Header';
import Projects from './Projects';

const Landing = () => {
    return (
        <Stack spacing={15}>
            
            <Header />
            {/* <AboutUs /> */}
            <Projects />
            <Footer />
        </Stack>
    );
};

export default Landing;
