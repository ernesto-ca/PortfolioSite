export interface ImageProps {
    src: string;
    alt: string;
}

export const ROOT: string = '/images/';

export const BANNER_IMAGE_DESKTOP: ImageProps = {
    src: `${ROOT}banner.png`,
    alt: 'Voxel art made by Ec',
};

export const BANNER_IMAGE_MOBILE: ImageProps = {
    src: `${ROOT}banner-mobile.png`,
    alt: 'Voxel art made by Ec',
}