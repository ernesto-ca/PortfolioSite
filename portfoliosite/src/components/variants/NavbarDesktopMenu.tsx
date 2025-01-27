import Stack from '@mui/material/Stack';

import { useShoppingCart } from 'use-shopping-cart';
import styled from '@mui/material/styles/styled';

import NavbarLink, { NavbarLinkProps } from '@ks/atoms/NavbarLink';
import ShoppingCartButton from '@ks/atoms/SoppingCartButton';

const StyledMenu = styled(Stack)(({ theme }) => ({
    marginLeft: 'auto',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));

interface NavbarDesktopMenuProps {
    links: NavbarLinkProps[];
}

const NavbarDesktopMenu = ({ links }: NavbarDesktopMenuProps) => {
    const { cartCount, handleCartClick } = useShoppingCart();

    return (
        <StyledMenu direction="row" spacing={4} alignItems="center">
            {links.map((link) => (
                <NavbarLink href={link.href} name={link.name} key={link.name} />
            ))}
            <ShoppingCartButton onClick={handleCartClick} count={cartCount} />
        </StyledMenu>
    );
};

export default NavbarDesktopMenu;