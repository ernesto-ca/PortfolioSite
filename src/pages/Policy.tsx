import React, { useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  Fade,
} from "@mui/material";
import { Language } from "@mui/icons-material";
import PageContainer from "@ec/components/organisms/PageContainer";
import ThemedFab from "@ec/components/molecules/ThemedFab"; 
import policyData from "@ec/data/policy.json";

type LanguageCode = "es" | "en";

const Policy = () => {
  const theme = useTheme();
  const [lang, setLang] = useState<LanguageCode>("en");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <PageContainer>
        <Box sx={{ width: "100%", padding: "1rem" }}>
             <Fade in={true} key={lang} timeout={500}>
                <Box>
                    {policyData.map((section) => (
                        <Box key={section.id} mb={4}>
                            <Typography 
                                variant={section.id === "intro" ? "h4" : "h6"} 
                                sx={{ 
                                    textTransform: "uppercase", 
                                    fontWeight: 700, 
                                    fontFamily: "Space Mono",
                                    color: theme.palette.text.secondary,
                                    mb: 2
                                }}
                            >
                                {section.title[lang]}
                            </Typography>
                            <Typography 
                                variant="body1" 
                                sx={{ 
                                    color: theme.palette.text.secondary,
                                    whiteSpace: "pre-line",
                                    opacity: 0.9
                                }}
                            >
                                {section.body[lang]}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Fade>

            <ThemedFab 
                onClick={toggleLanguage}
                aria-label="Change Language"
                sx={{
                    flexDirection: "column",
                    gap: 0,
                    fontSize: "0.75rem",
                    fontWeight: "bold"
                }}
            >
                <Language sx={{ fontSize: "1.2rem" }} />
                <span>{lang === "es" ? "EN" : "ES"}</span>
            </ThemedFab>
        </Box>
    </PageContainer>
  );
};

export default Policy;
