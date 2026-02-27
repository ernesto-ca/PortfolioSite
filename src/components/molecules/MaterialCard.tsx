import { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  styled,
  useTheme,
  Collapse,
} from "@mui/material";
import { Favorite } from "@mui/icons-material";
import Carousel from "./Carousel"; 
import { getCompanyImages } from "@ec/utils/imageLoader";

const CardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper, 
  borderRadius: "12px",
  boxShadow:
    "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.3)",
  transition: "box-shadow 0.2s",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  marginBottom: theme.spacing(3),
  "&:hover": {
    boxShadow:
      "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.3)",
  },
  [theme.breakpoints.up("xl")]: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between", 
  },
}));

const ImageArea = styled(Box)(({ theme }) => ({
  width: "100%",
  aspectRatio: "16 / 9",
  [theme.breakpoints.up("xl")]: {
    width: "40%",   
    minWidth: "300px", 
    maxWidth: "400px", 
    aspectRatio: "auto",
    minHeight: "250px", 
    flexShrink: 0, 
  },
  "& .slick-slider, & .slick-list, & .slick-track": {
      height: "100%",
  },
  "& .slick-slide": {
      height: "100%",
      "& > div": {
           height: "100%",
      }
  },
}));

const CardImage = styled(Box)<{ src: string }>(({ src }) => ({
  width: "100%",
  height: "100%", 
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: `url(${src})`,
}));


const ContentArea = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
}));

export interface MaterialCardProps {
  title: string;
  subtitle?: string;
  dateRange?: string;
  description?: string;
  fullDescription?: string;
  technologies?: string[];
  imageQuery?: string;
  images?: string[];
  isExpanded?: boolean;
  enableFullScreen?: boolean;
}

const MaterialCard = ({ 
    title, 
    subtitle, 
    dateRange, 
    description, 
    fullDescription, 
    technologies, 
    imageQuery, 
    images: directImages,
    enableFullScreen = false
}: MaterialCardProps) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  

  const images = directImages || (imageQuery ? getCompanyImages(imageQuery) : []);

  return (
    <CardContainer>
      <ImageArea>
        {images.length > 1 ? (
          <Carousel enableFullScreen={enableFullScreen}>
            {images.map((img, index) => (
              <CardImage key={index} src={img} />
            ))}
          </Carousel>
        ) : (
          <CardImage src={images.length > 0 ? images[0] : ""} />
        )}
      </ImageArea>

      <ContentArea>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "8px",
          }}
        >
          <div>
            <Typography variant="h6" sx={{ fontWeight: 500, fontSize: { xs: "18px", sm: "1.25rem" } }}>
              {title}
            </Typography>
            {subtitle && (
                <Typography
                variant="subtitle2"
                sx={{ fontWeight: "bold", color: theme.palette.text.secondary, fontSize: { xs: "14px", sm: "0.875rem" } }}
                >
                {subtitle}
                </Typography>
            )}
            {dateRange && (
                <Typography variant="caption" sx={{ color: theme.palette.text.secondary, opacity: 0.7, fontSize: { xs: "14px", sm: "0.75rem" } }}>
                {dateRange}
                </Typography>
            )}
          </div>
          <IconButton
            sx={{
              color: theme.palette.primary.main,
              "&:hover": { backgroundColor: theme.palette.action.hover },
            }}
          >
            <Favorite />
          </IconButton>
        </Box>

        {description && (
            <Typography
            variant="body1"
            sx={{
                color: theme.palette.text.secondary, 
                marginBottom: "1rem",
                lineHeight: 1.6,
                fontSize: { xs: "14px", sm: "1rem" }
            }}
            >
            {description}
            </Typography>
        )}

        <Collapse in={expanded}>
            <Typography variant="body2" sx={{ marginBottom: "1rem", color: theme.palette.text.secondary, fontSize: { xs: "14px", sm: "0.875rem" } }}>
                {fullDescription}
            </Typography>
             {technologies && (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 2 }}>
                    {technologies.map(tech => (
                        <Box key={tech} sx={{ 
                            fontSize: { xs: "14px", sm: "0.75rem" }, 
                            bgcolor: theme.palette.action.selected, 
                            px: 1, 
                            py: 0.5, 
                            borderRadius: "4px" 
                        }}>
                            {tech}
                        </Box>
                    ))}
                </Box>
            )}
        </Collapse>

        <Box sx={{ marginTop: "auto", display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={() => setExpanded(!expanded)}
            sx={{
              borderRadius: "100px",
              border: `1px solid ${theme.palette.divider}`,
              color: theme.palette.primary.main,
              fontWeight: 500,
              padding: "8px 24px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.primary.contrastText
              },
            }}
          >
            {expanded ? "Show Less" : "See More"}
          </Button>
        </Box>
      </ContentArea>
    </CardContainer>
  );
};

export default MaterialCard;
