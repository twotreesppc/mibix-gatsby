import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import NavbarStyleTwo from '../components/App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/App/Footer';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import BlogIndex from '../components/Blog/BlogIndex';


const BlogListTemplate = (props) => {
  const { data } = props
  const { currentPage, numPages } = props.pageContext  
  const { AllBlogs, Tags } = data
  const { edges: blogsData } = data.Blogs
  console.log('All tags',Tags)
  console.log('All blogs',AllBlogs)

  // Tags.edges.map((tag) => {
  //   let blogsWithTag = AllBlogs.edges.filter(
  //     (blog) => {        
  //       return blog.node.tags && blog.node.tags.find((item)=>{
  //         if(item.uid === tag.node.uid)
  //         {
  //           return item
  //         }
  //       })
  //     }        
  //   );

  //   console.log('Tag Name',tag.node.tag)
  //   console.log('Tag Name Blog', blogsWithTag)

  //  // let tagPath = `${basePath}/${tag.node.uid}`;
  //   //let tnumPages = Math.ceil(blogsWithTag.length / postsPerPage)

  // })

  if (!blogsData) return null;
  return (
    <Layout>
        <SEO title="Blog One" />
        <NavbarStyleTwo />

        <PageBanner 
            pageTitle="Blog" 
        />
        <BlogIndex data={blogsData} currentPage={currentPage} numPages={numPages}/>  
        <Footer />
    </Layout>
  );
};

BlogListTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogListTemplate;

export const data = graphql`
query ($skip: Int!, $limit: Int!) {
  AllBlogs: allContentfulBlogPost(limit: 2) {
      edges {
          node {
              id
              slug
              title
              category {
                uid
              }
              tags {
                tag
                uid
              }
          }
      }
  }
  Tags : allContentfulTags {
    edges {
      node {
        id
        uid
        tag
      }
    }
  }
  Blogs: allContentfulBlogPost(
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
