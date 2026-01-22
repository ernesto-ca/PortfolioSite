import Typography from "@mui/material/Typography";
import { Skill } from "@ec/constants/objects";
import { Card, CardContent, styled } from "@mui/material";

const StyledCard = styled(Card)<{
  isTech: boolean;
}>(({ theme, isTech }) => ({
  cursor: "default",
  width: theme.spacing(60),
  margin: "auto",
  boxShadow: theme.shadows[4],
  borderRadius: "1rem",
  backgroundColor: isTech ? theme.palette.primary.dark : "white",
  transition: `all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeOut}`,
   [theme.breakpoints.down("md")]: {
    width: theme.spacing(30),
  },
  ":hover": {
    transform: "scale(1.03)",
    boxShadow: theme.shadows[8],
  },
}));

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <StyledCard isTech={skill.type === "tech"}>
      <CardContent sx={{ textAlign: "start", padding: "1rem" }}>
        <Typography
          variant="h4"
          mb={4}
          color={skill.type === "tech" ? "white" : "primary"}
          style={{ fontWeight: "bold" }}
        >
          {skill.name}
        </Typography>
        <Typography
          variant="body2"
          color={skill.type === "tech" ? "white" : "primary"}
        >
          {skill.description}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default SkillCard;
