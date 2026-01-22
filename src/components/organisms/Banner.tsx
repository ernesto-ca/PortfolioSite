import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";

import { PropsWithChildren } from "react";

import { DESKTOP_STATUS_BAR } from "../../constants/images";

import { DESKTOP_CAMERA, BANNER_IMAGE_DESKTOP } from "../../constants/images";
import { styled } from "@mui/system";

const StyledBackground = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: `${theme.spacing(32)} 0`,
  borderTopRightRadius: theme.spacing(8),
  borderTopLeftRadius: theme.spacing(8),
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: `
        url(${BANNER_IMAGE_DESKTOP.src});
    `,
  backgroundColor: `rgba(0, 0, 0, 0.4)`,
  backgroundBlendMode: "color",
  borderTop: "9rem solid black",
  boxShadow: `4px 4px 12px ${alpha(theme.palette.secondary.main, 0.4)}`,
  [theme.breakpoints.down("md")]: {
    backgroundImage: `url(${BANNER_IMAGE_DESKTOP.src})`,
    border: "none",
  },
}));

const Banner = ({ children }: PropsWithChildren) => (
  <>
    <StyledBackground>
      <Box
        component="img"
        sx={(theme) => ({
          position: "absolute",
          top: "-7rem",
          left: "50%",
          transform: "translateX(-50%)",
          height: "5rem",
          width: "auto",
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        })}
        src={DESKTOP_CAMERA.src}
        alt={DESKTOP_CAMERA.alt}
      />
      <Box
        component="img"
        sx={(theme) => ({
          position: "absolute",
          top: "-5.5rem",
          right: "3rem",
          height: "2rem",
          width: "auto",
          zIndex: 10,
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        })}
        src={DESKTOP_STATUS_BAR.src}
        alt={DESKTOP_STATUS_BAR.alt}
      />
      {children}
    </StyledBackground>
  </>
);

export default Banner;
