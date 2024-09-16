import React from 'react';
import { useStaticQuery, graphql, Link } from "gatsby"
import BlogIndex from '../Blog/BlogIndex';
import BlogImg1 from '../../assets/images/blog/blog-img1.jpg'
import BlogImg2 from '../../assets/images/blog/blog-img2.jpg'
import BlogImg3 from '../../assets/images/blog/blog-img3.jpg'

import User1 from '../../assets/images/user1.jpg'
import User2 from '../../assets/images/user2.jpg'
import User3 from '../../assets/images/user3.jpg'

const LatestBlogPost = () => {
    const { LatestPosts } = useStaticQuery(
        graphql`
          query {
            LatestPosts: allContentfulBlogPost(
                limit: 3
                sort: {fields: publishdate, order: DESC}
              ) {
                edges {
                  node {
                    id
                    slug
                    title
                    publishdate
                    featuredimage {
                      gatsbyImageData(quality: 100, layout: CONSTRAINED, width: 500, height: 400)
                    }
                    author {
                      name
                      picture {
                        gatsbyImageData(width: 58, height: 58, layout: FIXED, quality: 100)
                      }
                    }
                  }
                }
              }            
          }
        `
      )
      const { edges: blogsData } = LatestPosts
    return (
        <div className="blog-area bg-f9f9f9 pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Our Blog</span>
                    <h2>Our Latest Media</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div className="row">
                    <BlogIndex data={blogsData} currentPage={1} numPages={1}/>  
                </div>
            </div>
         </div>
    );
    };

export default LatestBlogPost;