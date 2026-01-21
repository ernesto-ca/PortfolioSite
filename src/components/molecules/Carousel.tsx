import React, { ComponentProps, PropsWithChildren, useRef, useState, forwardRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import { styled } from "@mui/material/styles";
import { Dialog, IconButton, Box, Slide } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from "@mui/material/transitions";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledSlider = styled(Slider)(({ theme }) => ({
  margin: "auto",
  alignContent: "normal",
  height: "100%",
  "& .slick-dots": {
    bottom: "10px",
    "& li button:before": {
      fontSize: "10px",
      color: theme.palette.secondary,
    },
    "& li.slick-active button:before": {
      color: theme.palette.primary.main,
    },
  },
}));

interface CarouselProps extends PropsWithChildren {
  props?: ComponentProps<typeof StyledSlider>;
  enableFullScreen?: boolean;
  slidesToShow?: number;
}

const Carousel = ({ props, children, enableFullScreen = false, slidesToShow }: CarouselProps) => {

  const modalSliderRef = useRef<Slider | null>(null);
  const [settings, _] = useState<Settings>({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow || 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  });

  const [isFullScreen, setIsFullScreen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  const handleOpen = (index: number) => {
    if (enableFullScreen) {
      setInitialSlide(index);
      setIsFullScreen(true);
    }
  };

  const handleClose = () => {
    setIsFullScreen(false);
  };

  const modalSettings = {
    ...settings,
    initialSlide: initialSlide,
    autoplay: false,
    arrows: true,
    dots: true,
  };

  return (
    <>
      <StyledSlider {...props} {...settings}>
        {enableFullScreen
          ? React.Children.map(children, (child, index) => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                  onClick: () => handleOpen(index),
                  style: { ...(child as any).props.style, cursor: "pointer" }
                } as any);
              }
              return child;
            })
          : children}
      </StyledSlider>

      <Dialog
        fullScreen
        open={isFullScreen}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{ "& .MuiDialog-paper": { bgcolor: "black" } }}
      >
        <Box sx={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
           <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              zIndex: 10,
              color: "white",
              bgcolor: "rgba(0,0,0,0.5)",
              "&:hover": { bgcolor: "rgba(0,0,0,0.7)" }
            }}
          >
            <CloseIcon />
          </IconButton>
          
          <Box sx={{ width: "100%", height: "80%" }}>
             <StyledSlider 
                ref={modalSliderRef} 
                {...props} 
                {...modalSettings}
                sx={{
                   height: "100%",
                   "& .slick-list, & .slick-track, & .slick-slide > div": { height: "100%" },
                   "& .MuiBox-root": { 
                       backgroundSize: "contain !important",
                       backgroundRepeat: "no-repeat"
                   }
                }}
             >
                {children}
             </StyledSlider>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default Carousel;
