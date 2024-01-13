import { Divider, Stack, Typography } from '@mui/material';
import React from 'react';

const Title = ({ children, white, sm, noMargin }) => {
    return (
        <Stack direction="row" spacing={2} alignItems="center" mb={noMargin ? 0 : 5}>
            <Divider
                sx={(theme) => ({
                    width: '100%',
                    border: sm ? '0.5px solid' : '1px solid',
                    borderColor: white ? theme.palette.common.white : theme.palette.muted.main,
                    maxWidth: sm ? '2rem' : '4rem',
                })}
            />
            <Typography
                component="span"
                sx={(theme) => ({
                    fontSize: sm ? theme.fontSize.sm : theme.fontSize['xl'],
                    fontWeight: theme.fontWeight.normal,
                    color: white ? theme.palette.common.white : theme.palette.primary.main,
                    lineHeight: 1,
                    textTransform: 'uppercase',
                    letterSpacing: 2.5,
                })}
            >
                {children}
            </Typography>
        </Stack>
    );
};

export default Title;
