import { useState } from "react";
import { styled, Drawer, ListItem, ListItemButton, IconButton, List, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarLink, { NavbarLinkProps } from "@ec/components/molecules/NavbarLink";

const StyledMenu = styled(Box)(({ theme }) => ({
  marginLeft: "auto",
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

interface NavbarMobileMenuProps {
  links: NavbarLinkProps[];
}

const NavbarMobileMenu = ({ links }: NavbarMobileMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
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
      <Drawer
        disableScrollLock={true}
        variant="temporary"
        anchor="top"
        open={isMenuOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} sx={{backgroundColor: "black"}}>
          <List>
            {links.map((link) => (
              <ListItem disablePadding key={link.name}>
                <ListItemButton>
                  <NavbarLink
                    href={link.href}
                    name={link.name}
                    icon={undefined}
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
