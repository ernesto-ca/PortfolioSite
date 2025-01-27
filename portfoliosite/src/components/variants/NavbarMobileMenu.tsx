import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import { useShoppingCart } from 'use-shopping-cart';
import { useState } from 'react';
import styled from '@mui/material/styles/styled';
import MenuIcon from '@mui/icons-material/Menu';

import NavbarLink, { NavbarLinkProps } from '@ks/atoms/NavbarLink';
import ShoppingCartButton from '@ks/atoms/SoppingCartButton';

const StyledMenu = styled(Box)(({ theme }) => ({
    marginLeft: 'auto',
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block',
    },
}));

interface NavbarMobileMenuProps {
    links: NavbarLinkProps[];
}

const NavbarMobileMenu = ({ links }: NavbarMobileMenuProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cartCount, handleCartClick } = useShoppingCart();

    const toggleDrawer =
        (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setIsMenuOpen(open);
        };

    return (
        <StyledMenu>
            <IconButton
                size="large"
                aria-haspopup="true"
                onClick={toggleDrawer(true)}
                color="primary"
            >
                <MenuIcon />
            </IconButton>
            <ShoppingCartButton count={cartCount} onClick={handleCartClick} />
            <Drawer
                disableScrollLock={true}
                variant="temporary"
                anchor="top"
                open={isMenuOpen}
                onClose={toggleDrawer(false)}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                <Box
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        {links.map((link) => (
                            <ListItem disablePadding key={link.name}>
                                <ListItemButton>
                                    <NavbarLink
                                        href={link.href}
                                        name={link.name}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </StyledMenu>
    );
};

export default NavbarMobileMenu;