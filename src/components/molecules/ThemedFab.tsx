import { Button, styled } from "@mui/material";

export const ThemedFab = styled(Button)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(3),
  right: theme.spacing(3),
  width: "56px",
  height: "56px",
  borderRadius: "16px",
  backgroundColor: theme.palette.primary.main, 
  color: theme.palette.primary.contrastText,
  boxShadow: theme.shadows[4],
  minWidth: "unset",
  "&:hover": {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default ThemedFab;
