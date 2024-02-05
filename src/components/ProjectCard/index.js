import React from 'react';
import { Button, GradientButton, Img, Link } from '..';
import { Box, CardMedia, Stack, Typography, Avatar } from '@mui/material';
// import { dateFormattingTxt } from '../../utils/functions';
// import Bg from '../../assets/background/polygon-scatter-haikei-2.png';

const ProjectCard = ({ title, image, url, logo }) => {
    return (
        // <Stack height="100%">
        //     <Box position="relative">
        //         <CardMedia
        //             image={image}
        //             sx={(theme) => ({
        //                 height: { md: 200, sm: 200, xs: 200 },
        //                 borderRadius: theme.borderRadius.lg,
        //             })}
        //         />
        //         <Box
        //             position="absolute"
        //             width="100%"
        //             height="100%"
        //             top="50%"
        //             right="50%"
        //             sx={(theme) => ({
        //                 transform: 'translate(50%, -50%)',
        //                 background: theme.gradient.secondaryDark,
        //             })}
        //         />
        //     </Box>
        //     <Card
        //         sx={{
        //             alignSelf: 'stretch',
        //             position: 'relative',
        //             // backgroundImage: `url(${Bg})`,
        //             backgroundRepeat: 'no-repeat',
        //             backgroundPosition: 'bottom right',
        //             backgroundSize: 'contain',
        //         }}
        //     >
        //         <Stack height="100%">
        //             {/* <Box display="flex" alignItems="center" gap={0.5} mb={1}>
        //                 <Typography
        //                     sx={(theme) => ({
        //                         textTransform: 'uppercase',
        //                         fontSize: theme.fontSize.xs,
        //                         fontWeight: theme.fontWeight.light,
        //                         color: theme.palette.primary.secondary,
        //                     })}
        //                 >
        //                     {category}
        //                 </Typography>
        //                 <Box
        //                     sx={(theme) => ({
        //                         p: 0.25,
        //                         backgroundColor: theme.palette.primary.dark,
        //                         borderRadius: theme.borderRadius.full,
        //                     })}
        //                 />
        //             </Box> */}
        //             <Typography
        //                 sx={(theme) => ({
        //                     fontWeight: theme.fontWeight.light,
        //                     textTransform: 'capitalize',
        //                     fontSize: theme.fontSize['2xl'],
        //                     color: theme.palette.common.black,
        //                     flexGrow: 1,
        //                     textAlign: 'center',
        //                 })}
        //             >
        //                 {title}
        //             </Typography>
        //             {/* <Typography
        //                 component="i"
        //                 sx={(theme) => ({
        //                     textTransform: 'uppercase',
        //                     fontSize: theme.fontSize.xs,
        //                     fontWeight: theme.fontWeight.light,
        //                     color: theme.palette.grey['600'],
        //                     mt: 'auto',
        //                 })}
        //             >
        //                 {dateFormattingTxt(date)}
        //             </Typography> */}
        //         </Stack>
        //     </Card>
        // </Stack>

        <Stack sx={{ height: '100%' }}>
            <Stack flexGrow={1}>
                <Box position="relative" overflow="hidden">
                    <CardMedia
                        image={image}
                        sx={(theme) => ({
                            borderRadius: theme.borderRadius.md,
                            boxShadow: theme.shadows[4],
                            height: { md: 250, xs: 200 },
                            position: 'relative',
                            overflow: 'hidden',
                        })}
                    />
                    <Box
                        position="absolute"
                        width="100%"
                        height="100%"
                        top="50%"
                        right="50%"
                        sx={(theme) => ({
                            transform: 'translate(50%, -50%)',
                            background: theme.gradient.darkAlpha,
                            borderRadius: theme.borderRadius.md,
                        })}
                    />
                    <Img
                        src={logo}
                        variant="square"
                        sx={{
                            position: 'absolute',
                            right: '50%',
                            top: '50%',
                            transform: 'translate(50%, -50%)',
                            width: 200,
                        }}
                    />
                </Box>
                {/* <Stack direction="row" gap={1.25} mb={1.25} mt={2} flexWrap="wrap"> */}
                {/* {categories?.map((item) => (
                        <Category>{item.title}</Category>
                    ))} */}
                {/* </Stack> */}
                <Typography
                    component="h1"
                    sx={(theme) => ({
                        // fontWeight: theme.fontWeight.bold,
                        textTransform: 'capitalize',
                        fontSize: theme.fontSize['2xl'],
                        color: theme.palette.common.black,
                        my: 2,
                        flexGrow: 1,
                    })}
                >
                    {title}
                </Typography>
                {/* <Author author={author} publishedAt={publishedAt} /> */}
                <Link sx={{ mt: 2, alignSelf: 'flex-start' }} to={url} target="_blank">
                    <Button>See More</Button>
                </Link>
            </Stack>
        </Stack>
    );
};

export default ProjectCard;
