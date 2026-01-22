import { Box, Stack } from "@mui/material";

import { styled } from "@mui/system";
import { LOGO_WHITE } from "../../constants/images";


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
