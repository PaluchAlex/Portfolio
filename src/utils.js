export const getImageUrl = (path) => {
    // makes it easyer to dinamycally import images into our different components
    return new URL(`/assets/${path}`, import.meta.url).href;
};