import Stack from "@mui/material/Stack";

import NavbarLink, { NavbarLinkProps } from "../molecules/NavbarLink";
import { styled, Tab, Tabs } from "@mui/material";
import * as URLS from "@ec/constants/urls";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const StyledMenu = styled(Stack)(({ theme }) => ({
  marginLeft: "auto",
  marginRight: "auto",
  transition: `all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeOut}`,

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

interface NavbarDesktopMenuProps {
  links: NavbarLinkProps[];
}

const NavbarDesktopMenu = ({ links }: NavbarDesktopMenuProps) => {
  const location = useLocation();
  const [value, setValue] = useState(0);

  // Sync value with location path
  useEffect(() => {
    const currentLink = links.find(link => location.pathname === link.href);
    if (currentLink) {
      setValue(links.indexOf(currentLink));
    } else {
       // Handle cases where path might not match exactly or valid default
       // For now, if no match (e.g. 404), maybe keep last or set to -1
       const activeIndex = links.findIndex(link => location.pathname.startsWith(link.href) && link.href !== URLS.INDEX);
        if (activeIndex !== -1) {
            setValue(activeIndex);
        } else if (location.pathname === URLS.INDEX) {
            const homeIndex = links.findIndex(link => link.href === URLS.INDEX); // or About if default
            if(homeIndex !== -1) setValue(homeIndex);
        }
    }
  }, [location.pathname, links]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <StyledMenu direction="row" spacing={4}>
      <Tabs
        value={value}
        onChange={handleChange}
        sx={{
          "& .MuiTabs-indicator": {
            display: "none",
          },
        }}
      >
        {links.map((link) => (
          <Tab
            label={
              <NavbarLink
                href={link.href}
                name={link.name}
                key={link.name}
                icon={link.icon}
                isActive={value === links.indexOf(link)}
              />
            }
            id={`tab-${link.name}`}
            value={links.indexOf(link)}
            sx={{
              padding: 0,
              marginInline: "1rem",
            }}
          />
        ))}
      </Tabs>
    </StyledMenu>
  );
};

export default NavbarDesktopMenu;
