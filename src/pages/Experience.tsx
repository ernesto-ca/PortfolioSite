  import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  useTheme,
  Fade,
  Grid,
  useMediaQuery,
} from "@mui/material";
import PageContainer from "@ec/components/organisms/PageContainer";
import MaterialCard from "@ec/components/molecules/MaterialCard";
import experienceData from "@ec/data/experience.json";

const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [tabValue, setTabValue] = useState("professional");

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  const filteredData = experienceData.filter(
    (item) => item.category === tabValue
  );

  return (
    <PageContainer>
      <Box sx={{ width: "100%", padding: "2rem" }}> 
        <header style={{ marginBottom: "2rem" }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            centered={!isMobile}
            variant={isMobile ? "scrollable" : "standard"}
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              borderBottom: `1px solid ${theme.palette.divider}`,
              "& .MuiTab-root": {
                textTransform: "uppercase",
                fontFamily: "Space Mono", 
                fontSize: "1rem", 
                fontWeight: 700, 
                letterSpacing: "0.1rem",
                minWidth: "auto",
                padding: "16px 24px",
                color: theme.palette.text.secondary,
                transition: "all 0.2s",
                "&:hover": {
                  color: theme.palette.primary.main,
                  backgroundColor: theme.palette.action.hover,
                },
                "&.Mui-selected": {
                  color: theme.palette.primary.main,
                },
              },
              "& .MuiTabs-indicator": {
                backgroundColor: theme.palette.primary.main,
              },
            }}
          >
            <Tab label="Professional" value="professional" />
            <Tab label="Freelance" value="freelance" />
            <Tab label="Open Source" value="opensource" />
            <Tab label="Personal" value="personal" />
          </Tabs>
        </header>

        <main>
          <Grid container spacing={3}>
            {filteredData.map((item, index) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}> 
                <Fade in={true} timeout={300 + index * 100}>
                  <Box height="100%">
                    <MaterialCard 
                        title={item.title}
                        subtitle={item.company}
                        dateRange={item.dateRange}
                        description={item.description}
                        fullDescription={item.fullDescription}
                        technologies={item.technologies}
                        imageQuery={item.company}
                        enableFullScreen={true}
                    />
                  </Box>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </main>
      </Box>
    </PageContainer>
  );
};

export default Experience;
