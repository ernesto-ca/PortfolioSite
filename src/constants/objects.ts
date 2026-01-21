export interface Skill {
  name: string;
  type: "tech" | "soft";
  description: string;
}

export function convertSkillsToObjects(
  skillsJson: Record<string, { type: string; shortDescription: string }>
): Skill[] {
  return Object.entries(skillsJson).map(([name, skill]) => ({
    name,
    type: skill.type == "tech" ? "tech" : "soft",
    description: skill.shortDescription,
  }));
}

export interface Experience {
  position: string;
  company: string;
  dateRange: string;
  description: string;
}

export function convertExperiencesToObjects(
  experienceJson: Record<
    string,
    { where: string; dateRange: string; description: string }
  >
): Experience[] {
  return Object.entries(experienceJson).map(([position, experience]) => ({
    position,
    dateRange: experience.dateRange,
    company: experience.where,
    description: experience.description,
  }));
}
