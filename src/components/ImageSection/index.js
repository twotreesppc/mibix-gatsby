import React from 'react';
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

const ImageSection = ({ image }) => {
  return <GatsbyImage image={getImage(image)} />;
};

export default ImageSection;