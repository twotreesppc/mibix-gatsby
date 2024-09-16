import React, { useState } from "react"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby";
import moment from 'moment';

const BlogItem = ({data}) => {
    const {slug, title, publishdate, featuredimage, author } = data.node
    return(
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="single-blog-post">
                <div className="image">
                    <Link to={`/${slug}`} className="d-block">
                    <GatsbyImage image={getImage(featuredimage)} alt={title} />
                    </Link>
                </div>
                <div className="content">
                    <h3>
                        <Link to={`/${slug}`}>
                            {title}
                        </Link>
                    </h3>
                    <div className="d-flex align-items-center">

                        {author && <GatsbyImage image={getImage(author.picture)} alt={author.name} />}
                        <div className="info">
                            {author && <h5>{author.name}</h5>}
                            <span>{moment(publishdate).format('MMM DD, YYYY')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BlogItem;