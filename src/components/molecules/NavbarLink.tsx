import { Link, SxProps, Theme, Stack, styled } from "@mui/material";
import { ReactNode } from "react";

const StyledLink = styled(Link)<{ $isActive: boolean }>(
  ({ theme, $isActive }) => ({
    color: $isActive ? theme.palette.primary.dark : "white",
    padding: theme.spacing(2),
    textDecoration: "none",
    border: "2px solid transparent",
    ":hover": {
      background: "2px solid white",
      borderRight: "2px solid white",
      borderLeft: "2px solid white",
    },
    backgroundColor: $isActive ? "white" : "transparent",
    transition: "all 0.5s ease",
    ...theme.typography.caption,
  })
);

export interface NavbarLinkProps {
  href: string;
  name: string;
  icon?: ReactNode;
  isActive?: boolean;
  sx?: SxProps<Theme>;
}

export const NavbarLink = ({ href, name, icon, isActive, sx }: NavbarLinkProps) => (
  <StyledLink
    href={href} 
    target={href.length >= 1 ? "_self" : "_blank"}
    $isActive={isActive ? true : false}
    sx={sx}
  >
    <Stack alignItems="center" direction="column">
      {icon && icon}
      {name}
    </Stack>
  </StyledLink>
);

export default NavbarLink;
