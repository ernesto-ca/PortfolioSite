import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavbarMobileMenu from "../variants/NavbarMobileMenu"; 
import NavbarDesktopMenu from "../variants/NavbarDesktopMenu";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import { NavbarLinkProps } from "@ec/components/molecules/NavbarLink";
import * as URLS from "@ec/constants/urls";
import { styled } from "@mui/material";
import { ContactPage, People, Policy, WorkHistory } from "@mui/icons-material";

interface StyledNavbarProps {
  isSticky: boolean;
}
const StyledNavbar = styled(AppBar)<StyledNavbarProps>(
  ({ theme, isSticky }) => ({
    backgroundColor: "transparent",
    transition: `background ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeOut}`,
    position: isSticky ? "fixed" : "absolute",
    top: isSticky ? "0" : "auto",
    bottom: isSticky ? "auto" : "0",
    [theme.breakpoints.up("md")]: {
      backgroundColor: isSticky ? theme.palette.primary.dark : "transparent",
    },
  })
);

const links: NavbarLinkProps[] = [
  { href: URLS.ABOUT, name: "ABOUT ME", icon: <ContactPage /> },
  { href: URLS.EXPERIENCE, name: "EXPERIENCE", icon: <WorkHistory /> },
  { href: URLS.CONTACT, name: "CONTACT", icon: <People /> },
  { href: URLS.PRIVACY_POLICY, name: "POLICY", icon: <Policy /> },
];

const Navbar = () => {
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 800,
  });

  return (
    <StyledNavbar elevation={0} isSticky={scrollTrigger}>
      <Toolbar disableGutters>
        <NavbarMobileMenu links={links} />
        <NavbarDesktopMenu links={links} />
      </Toolbar>
    </StyledNavbar>
  );
};

export default Navbar;
