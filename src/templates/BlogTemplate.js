import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import NavbarStyleTwo from '../components/App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/App/Footer';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Blog from '../components/Blog';


const BlogTemplate = ({data, location}) => {
const { PostData, AllCategories, AllTags } = data

  // if (!post) return null;
  return (
    <Layout>
        <SEO title="Blog One" />
        <NavbarStyleTwo />

        <PageBanner 
            pageTitle={PostData.title} 
        />
        <Blog data={PostData} location={location} AllCategories={AllCategories} AllTags={AllTags}/>
        <Footer />
    </Layout>
  );
};

export default BlogTemplate;

export const query = graphql`
query BlogBySlug($slug: String!) {
  AllCategories: allContentfulCategory {
    edges {
      node {
        uid
        id
        name
      }
    }
  }
  AllTags: allContentfulTags {
    edges {
      node {
        id
        tag
        uid
      }
    }
  }
  PostData: contentfulBlogPost(slug: {eq: $slug}) {
      id
      slug
      title
      publishdate
      content {
        raw
      }
      featuredimage {
        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
      }
      author {
        name
        picture {
          gatsbyImageData(width: 100, height: 100, layout: FIXED, quality: 100)
        }
        details {
          raw
        }
      }
      relatedPosts {
        title
        slug
        id
        publishdate
        featuredimage {
          gatsbyImageData(quality: 100, layout: CONSTRAINED, width: 150, height: 150)
        }
      }
      category {
        uid
        name
        id
      }
      tags {
        id
        tag
        uid
      }
      sections {
        ... on ContentfulSectionImage {
          __typename
          image {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
          }
        }
        ... on ContentfulSectionContent {
          __typename
          content {
            raw
          }
        }
        ... on ContentfulSectionBlockquote {
          __typename
          content {
            raw
          }
        }
      }
    }
  }
`;