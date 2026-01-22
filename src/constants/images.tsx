export interface ImageProps {
  src: string;
  alt: string;
}

export const ROOT: string = "/PortfolioSite/images/";

export const BANNER_IMAGE_DESKTOP: ImageProps = {
  src: `${ROOT}banner.png`,
  alt: "Voxel art made by Ec",
};

export const DESKTOP_CAMERA: ImageProps = {
  src: `${ROOT}front_camera.png`,
  alt: "fake camera lent",
};

export const DESKTOP_STATUS_BAR: ImageProps = {
  src: `${ROOT}status_bar.png`,
  alt: "fake phone status bar",
};

export const LITTLE_AVATAR: ImageProps = {
  src: `${ROOT}me.png`,
  alt: "Voxel art made by Ec",
};

export const COLLAGE_PRESENTATION: ImageProps = {
  src: `${ROOT}university.png`,
  alt: "My team and I ready for the project presentation!",
};

export const LOGO_WHITE: ImageProps = {
  src: `${ROOT}logo_white.svg`,
  alt: "Ec official logo by Ernesto Cabañas",
};

export const CONSTANT_LEARNING: ImageProps = {
  src: `${ROOT}learning-with-canela-voxel.png`,
  alt: "my little cat canela learning!",
};

export const IN_FAMILY_HOBBY: ImageProps = {
  src: `${ROOT}voxel-in-family.png`,
  alt: "Hanging out with my family!",
};

// Deloitte Images
export const GREAT_JOB: ImageProps = {
  src: `${ROOT}/deloitte/greatjob.png`,
  alt: "A special recognition form Deloitte and the Client due our excellent work.",
};
