import React from 'react';
import { Chip, alpha } from '@mui/material';

const Tag = ({ label, white }) => {
    return (
        <Chip
            size="small"
            sx={(theme) => ({
                backgroundColor: alpha(white ? theme.palette.common.white : theme.palette.primary.main, 0.125),
                color: white ? theme.palette.common.white : theme.palette.primary.main,
                fontWeight: theme.fontWeight.medium,
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                padding: theme.spacing(0.125, 0.25),
            })}
            label={label}
        />
    );
};

export default Tag;
