import React, { useState } from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import RichText from '../RichText';
const AuthorInfo = ({data}) => {
  const { name, picture, details } = data
  return (
    <div className="article-author">
        <div className="author-profile-header"></div>
        <div className="author-profile">
            <div className="author-profile-title">
                <GatsbyImage image={getImage(picture)} alt={name} className="shadow-sm mb-3" />
                <h4>{name}</h4>
                <RichText content={details} />
            </div>
        </div>
    </div>
  );
};

export default AuthorInfo;