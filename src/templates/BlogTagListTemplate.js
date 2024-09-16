import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import NavbarStyleTwo from '../components/App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/App/Footer';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import BlogIndex from '../components/Blog/BlogIndex';


const BlogTagListTemplate = (props) => {
  const { data } = props
  const { currentPage, numPages, uid } = props.pageContext  
  const { edges: blogsData } = data.Blogs
  const { TagInfo } = data
  


  if (!blogsData) return null;
  return (
    <Layout>
        <SEO title="Blog One" />
        <NavbarStyleTwo />

        <PageBanner 
            pageTitle={`Tag : ${TagInfo.tag}`} 
        />
        <BlogIndex data={blogsData} currentPage={currentPage} numPages={numPages} path={`blog/${uid}`}/>  
        <Footer />
    </Layout>
  );
};

BlogTagListTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogTagListTemplate;

export const data = graphql`
query ($uid: String!, $skip: Int!, $limit: Int!) {
  TagInfo : contentfulTags(uid: {eq: $uid}) {
    tag
  }
  Blogs: allContentfulBlogPost(
      filter: {tags: {elemMatch: {uid: {eq: $uid}}}}
      skip: $skip
      limit: $limit
      sort: {fields: publishdate, order: DESC}
    ) {
      edges {
        node {
          id
          slug
          title
          publishdate
          featuredimage {
            gatsbyImageData(quality: 100, layout: CONSTRAINED, width: 400, height: 350)
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
`;