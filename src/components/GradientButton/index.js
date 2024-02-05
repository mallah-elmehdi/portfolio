import React from 'react';
import { Button } from '..';

const GradientButton = ({ title, isRounded, sx, ...props }) => {
    return (
        <Button
            {...props}
            sx={(theme) => ({
                ...sx,
                background: theme.gradient.primary,
                borderRadius: isRounded === true ? theme.borderRadius.full : theme.borderRadius.lg,
            })}
        >
            {title}
        </Button>
    );
};

export default GradientButton;
