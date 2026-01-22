import { Box, Grid, Stack, Typography } from "@mui/material";
import {
  COLLAGE_PRESENTATION,
  CONSTANT_LEARNING,
  IN_FAMILY_HOBBY,
  LITTLE_AVATAR,
} from "@ec/constants/images";
import WaveBlob from "@ec/components/molecules/WaveBlob";
import PageContainer from "@ec/components/organisms/PageContainer";
import skillsJson from "@ec/data/skills.json";
import { convertSkillsToObjects } from "@ec/constants/objects";
import SkillCard from "@ec/components/molecules/SkillCard";
import Carousel from "@ec/components/molecules/Carousel";
import MaterialCard from "@ec/components/molecules/MaterialCard";
import textsInfo from "@ec/data/texts-info.json"; 
import { getCompanyImages } from "@ec/utils/imageLoader";

const AboutMe = () => {
  let techSkills = convertSkillsToObjects(skillsJson).filter(
    (skill) => skill.type === "tech"
  );
  let softSkills = convertSkillsToObjects(skillsJson).filter(
    (skill) => skill.type === "soft"
  );

  let certificates = getCompanyImages("certificates") || [];

  return (
    <PageContainer>
      <Stack spacing={4} pb={6}>
        <Stack direction="column" spacing={8} mb={4} alignItems="center">
              <WaveBlob>
            <Box
                component="img"
                src={LITTLE_AVATAR.src}
                alt={LITTLE_AVATAR.alt}
                sx={{
                width: { xs: "100%", md: "30rem", }, 
                paddingLeft: { xs: 0, md: "4rem", },
                }}
            />
            </WaveBlob>
            <Stack
            direction="column"
            alignSelf="center"
            sx={(theme) => ({
                paddingInline: theme.spacing(4),
            })}
            >
            <Typography variant="h2" textAlign="center">
                I'm Ernesto Cabañas
            </Typography>

            <Typography variant="body1" textAlign="start">
               {textsInfo.aboutme}
            </Typography>
            </Stack>
        </Stack>

        <MaterialCard
            title="My Background"
            description={textsInfo.background.description}
            fullDescription={textsInfo.background.fullDescription}
            enableFullScreen={true}
            images={[COLLAGE_PRESENTATION.src]}
        />

        <MaterialCard
            title="My Hobbies"
            subtitle="Family & Music"
            description={textsInfo.hobbies.description}
            enableFullScreen={true}
            images={[IN_FAMILY_HOBBY.src]}
        />

        <MaterialCard
            title="Continuous Learning"
            subtitle="Recent Interests"
            description={textsInfo.education.description}
            fullDescription={textsInfo.education.fullDescription}
            enableFullScreen={true}
            images={[CONSTANT_LEARNING.src]}
        />

        <Typography variant="h2" textAlign="center" mt={4} mb={2}>
            Some of My Certificates
        </Typography>
        <Carousel slidesToShow={1}>
           {certificates.map((certificate) => (
            <Box
                key={certificate}
                component="img"
                src={certificate}
                alt="Certificate"
                sx={{
                padding: {xs: "0", lg: "0 32rem"}
                }}
            />
           ))}
        </Carousel>

        <Grid container spacing={2} mt={2}>
            <Grid size={{ md: 6 }}>
            <Typography variant="h3" textAlign="center" mb={1}>
                Technical Skills
            </Typography>
            <Carousel slidesToShow={1}>
                {techSkills.map((skill) => (
                <SkillCard skill={skill} />
                ))}
            </Carousel>
            </Grid>
            <Grid size={{ md: 6 }}>
            <Typography variant="h3" textAlign="center" mb={1}>
                Soft Skills
            </Typography>
            <Carousel slidesToShow={1}>
                {softSkills.map((skill) => (
                <SkillCard skill={skill} />
                ))}
            </Carousel>
            </Grid>
        </Grid>
      </Stack>
    </PageContainer>
  );
};

export default AboutMe;
