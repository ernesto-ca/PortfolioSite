import Banner from "./components/organisms/Banner";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Navbar from "./components/organisms/Navbar";
import AppRouter from "./AppRouter";
import Footer from "./components/organisms/Footer";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box
        sx={(theme) => ({
          height: "1rem",
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        })}
      />
      <Banner>
        <Container maxWidth="xl">
          <Navbar />
          <Typography
            variant="h1"
            textAlign="center"
            textTransform="uppercase"
            color="white"
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                fontSize: "2rem",
              },
            })}
          >
            Building Digital Experiences That Matter
          </Typography>
        </Container>
      </Banner>
      <AppRouter />
      <Footer />
    </>
  );
}
