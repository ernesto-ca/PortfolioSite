import Box, { BoxProps } from '@mui/material/Box';

import styled from '@mui/material/styles/styled';
import { alpha } from '@mui/material/styles';

import { PropsWithChildren } from 'react';

import { ImageProps } from '@ec/images';

interface BackgroundProps extends BoxProps {
    image: ImageProps;
}

const StyledBackground = styled(Box)<BackgroundProps>(({ theme, image }) => ({
    padding: `${theme.spacing(32)} 0`,
    maxHeight: theme.spacing(35),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `
        url(${image.src});
    `,
    backgroundColor: `rgba(0, 0, 0, 0.4)`,
    backgroundBlendMode: 'color',
    boxShadow:`4px 4px 12px ${alpha(theme.palette.secondary.main, 0.4)}`
}));


const Banner = ({
    image,
    children
}: PropsWithChildren<BackgroundProps>) => (
    <StyledBackground image={image}>
        {children}
    </StyledBackground>
)

export default Banner;