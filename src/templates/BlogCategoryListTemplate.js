import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import NavbarStyleTwo from '../components/App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/App/Footer';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import BlogIndex from '../components/Blog/BlogIndex';


const BlogCategoryListTemplate = (props) => {
  const { data } = props
  const { currentPage, numPages, uid } = props.pageContext  
  const { edges: blogsData } = data.Blogs
  const { CategoryInfo } = data
  

  console.log('Number of paes', CategoryInfo)

  if (!blogsData) return null;
  return (
    <Layout>
        <SEO title="Blog One" />
        <NavbarStyleTwo />

        <PageBanner 
            pageTitle={`Category : ${CategoryInfo.name}`} 
        />
        <BlogIndex data={blogsData} currentPage={currentPage} numPages={numPages} path={`blog/${uid}`}/>  
        <Footer />
    </Layout>
  );
};

BlogCategoryListTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogCategoryListTemplate;

export const data = graphql`
query ($uid: String!, $skip: Int!, $limit: Int!) {
  CategoryInfo : contentfulCategory(uid: {eq: $uid}) {
    name
  }
  Blogs: allContentfulBlogPost(
      filter: {category: {uid: {eq: $uid}}}
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
