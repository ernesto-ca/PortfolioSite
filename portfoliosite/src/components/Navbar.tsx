import React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

import styled from '@mui/material/styles/styled';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import ShoppingCart from '@ks/organisms/ShoppingCart';
import NavbarMobileMenu from '@ks/molecules/NavbarMobileMenu';
import NavbarDesktopMenu from '@ks/molecules/NavbarDesktopMenu';

import { NavbarLinkProps } from '@ks/atoms/NavbarLink';
import { LOGO, LOGO_MOBILE } from '@ks/images';
import * as URLS from '@ks/urls';

const StyledNavbar = styled(AppBar)(({ theme }) => ({
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(3),
    backgroundColor: 'transparent',
    transition: `background-color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeOut}`,
    '&.background': {
        backgroundColor: theme.palette.background.default,
    },
}));

const StyledBrandIcon = styled('img')(({ theme }) => ({
    display: 'block',
    height: '10vmin',
    content: `url(${LOGO.src})`,
    [theme.breakpoints.down('md')]: {
        minHeight: '4rem',
        content: `url(${LOGO_MOBILE.src})`,
    },
}));

const links: NavbarLinkProps[] = [
    { href: URLS.ABOUT, name: 'ABOUT' },
    { href: URLS.ACCOUNTS, name: 'ACCOUNTS' },
    { href: URLS.CONTACT, name: 'CONTACT' },
    { href: `https://discord.gg/XD3NhurEty`, name: 'DISCORD' },
];

const Navbar = () => {
    const scrollTrigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    return (
        <StyledNavbar
            position="fixed"
            elevation={0}
            className={scrollTrigger ? 'background' : ''}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link href={URLS.INDEX}>
                        <StyledBrandIcon alt={LOGO.alt} />
                    </Link>
                    <NavbarMobileMenu links={links} />
                    <NavbarDesktopMenu links={links} />
                </Toolbar>
            </Container>
            <ShoppingCart />
        </StyledNavbar>
    );
};

export default Navbar;