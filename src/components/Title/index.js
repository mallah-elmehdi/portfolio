import { Container, Stack, Typography } from '@mui/material';
import React from 'react';
import Tag from '../Tag';

const Title = ({ sm, noMaxWith, label, white, title1, title2, bold1, bold2, slogan, sloganSize }) => {
    return (
        <Container {...(noMaxWith ? {} : { maxWidth: 'md' })}>
            <Stack alignItems="center">
                {label && <Tag white={white} label={label} />}
                <Typography
                    sx={(theme) => ({
                        mt: 2,
                        fontSize: theme.fontSize[sm ? 'xl' : '3xl'],
                        fontWeight: bold1 ? theme.fontWeight.bold : theme.fontWeight.light,
                        color: white ? theme.palette.common.white : theme.palette.common.black,
                        textAlign: 'center',
                    })}
                >
                    {title1}{' '}
                    <Typography
                        component="span"
                        sx={(theme) => ({
                            fontSize: theme.fontSize[sm ? 'xl' : '3xl'],
                            fontWeight: bold2 ? theme.fontWeight.bold : theme.fontWeight.light,
                            color: white ? theme.palette.common.white : theme.palette.common.black,
                            textAlign: 'center',
                        })}
                    >
                        {title2}
                    </Typography>
                </Typography>
                {slogan && (
                    <Typography
                        sx={(theme) => ({
                            mt: 2,
                            fontSize: sloganSize ? theme.fontSize[sloganSize] : theme.fontSize.xs,
                            fontWeight: theme.fontWeight.thin,
                            color: white ? theme.palette.common.white : theme.palette.common.grey,
                            textAlign: 'justify',
                            textAlignLast: 'center',
                        })}
                    >
                        {slogan}
                    </Typography>
                )}
            </Stack>
        </Container>
    );
};

export default Title;
