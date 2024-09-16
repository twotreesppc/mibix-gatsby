import React from "react"
import { GatsbyImage, getImage} from "gatsby-plugin-image"
import { FacebookProvider, Comments } from 'react-facebook';
import { Link } from "gatsby";
import moment from 'moment';
import Share from "./Share";
import SEO from "../App/SEO"
import NavbarStyleTwo from '../App/NavbarStyleTwo';
import PageBanner from '../Common/PageBanner';
import Footer from '../App/Footer';
import BlogSidebar from './BlogSidebar';
import BlogComments from './BlogComments';
import RichText from '../RichText';
import AuthorInfo from "./AuthorInfo";
import ComponentContainer from '../ComponentContainer';

import BlogImg1 from '../../assets/images/blog/blog-img4.jpg'
import BlogImg2 from '../../assets/images/blog/blog-img3.jpg'
import BlogImg3 from '../../assets/images/blog/blog-img5.jpg'

import User1 from '../../assets/images/user1.jpg'

const stwitterHandle = "@twotreesppc";
const Blog = ({data, AllCategories, AllTags, location}) => {
const {slug, title, content, publishdate, featuredimage, author, sections, category, tags, relatedPosts } = data
const stwitterHandle = "_MsLinda";
return(
  <div className="blog-details-area bg-f9f9f9 ptb-100">
      <div className="container">
          <div className="row">
              <div className="col-lg-8 col-md-12">
                  <div className="blog-details-desc">
                      <GatsbyImage image={getImage(featuredimage)} alt={title} />

                      <div className="article-content">
                          <div className="entry-meta">
                                <ul>
                                    {category && (
                                        <li>
                                            <i className='bx bx-folder-open'></i>
                                            <span>Category</span>
                                            <a href="#">{category.name}</a>                                             
                                        </li>   
                                    )}                                                                     
                                    <li>
                                        <i className='bx bx-calendar'></i>
                                        <span>Last Updated</span>
                                        {moment(publishdate).format('MMM DD, YYYY')}
                                    </li>
                                </ul>
                          </div>
                          <div className="w-100 my-4"><RichText content={content} /></div>
                          {sections.map((section, index) => (
                            <ComponentContainer data={section} key={index} />
                          ))}
                         
                       </div>

                      <div className="article-footer">
                            <div className="article-tags">
                                <span><i className='bx bx-purchase-tag'></i></span>
                                { tags && tags.map((tag,index)=>{
                                    return(
                                        <a href="#" key={index}>{tag.tag}</a>  
                                    )
                                })}
                            </div>


                          <div className="article-share">
                                <Share socialConfig={{ witter : stwitterHandle,
                                    config: {
                                    url: location.href,
                                    title: title,
                                    },
                                }}
                            />                          
                          </div>
                      </div>

                      <AuthorInfo data={author}/>
                      <FacebookProvider appId="653067601791847">
                            <Comments href="http://www.facebook.com" />
                      </FacebookProvider>

                  </div>
              </div>

              <div className="col-lg-4 col-md-12">
                  <div className="blog-right-sidebar">
                      <BlogSidebar location={location} AllCategories={AllCategories} AllTags={AllTags} relatedPosts={relatedPosts} />
                  </div>
              </div>
          </div>
      </div>
    </div>
);
};
export default Blog;