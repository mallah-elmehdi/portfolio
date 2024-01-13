import { Divider } from '@mui/material';
import React from 'react';

const Line = ({ white, smallLine }) => {
    return (
        <Divider
            sx={(theme) => ({
                width: '100%',
                border: '3px solid',
                borderColor: white ? theme.palette.common.white : theme.palette.secondary.main,
                maxWidth: smallLine ? '2rem' : '5rem',
            })}
        />
    );
};

export default Line;
