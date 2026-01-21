import { Box, Stack, Typography } from "@mui/material";

import { styled } from "@mui/system";
import { WAVES_BG_COLOR } from "../../constants/colors";
import { getRandomValue } from "../../constants/utils";
import { LOGO_WHITE } from "../../constants/images";
import { useEffect, useState } from "react";

const getRandomBorderRadius = () => {
  return `${getRandomValue(40, 10)}% ${getRandomValue(
    59,
    12
  )}% 0% 0% / ${getRandomValue(100, 50)}% ${getRandomValue(100, 50)}% 0% 0%`;
};

const AnimatedWave = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
}));
const Footer = () => {
  // ADD ICONS LIKE AN ANDROID DEVICE (arrow back go to back screen, circle go to main screen(about), menu opens the navbar menu)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setBorderRadius(getRandomBorderRadius());
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <AnimatedWave
        sx={{
          padding: "2rem",
        }}
      >
        <Stack direction="row">
          <img
            src={LOGO_WHITE.src}
            alt={LOGO_WHITE.alt}
            width={64}
            height={64}
          ></img>
        </Stack>
      </AnimatedWave>
    </>
  );
};

export default Footer;
