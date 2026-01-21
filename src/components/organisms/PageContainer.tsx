import { Box, styled } from "@mui/material";

import { ReactNode } from "react";

interface StyledPageProps {
  children?: ReactNode;
}

const StyledPage = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8),
  background: theme.palette.background.default,
}));

const PageContainer = ({ children }: StyledPageProps) => {
  return <StyledPage>{children}</StyledPage>;
};

export default PageContainer;
