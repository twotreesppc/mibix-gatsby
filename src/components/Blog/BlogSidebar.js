import React from 'react';
import { Link } from "gatsby"
import moment from 'moment';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import TeamImg1 from '../../assets/images/team/mike-sq.jpg'
import TeamImg2 from '../../assets/images/team/mirah-sq.jpg'
import TeamImg3 from '../../assets/images/team/aaron-sq.jpg'
import TeamImg4 from '../../assets/images/team/lexi-sq.jpg'
import TeamImg5 from '../../assets/images/team/abigail-sq.jpg'
import TeamImg6 from '../../assets/images/team/cecilia-sq.jpg'

const BlogSidebar = ({AllCategories, AllTags, relatedPosts}) => {
    console.log('AllTag',relatedPosts)
    return (
        <div className="widget-area">
            {/* <div className="widget widget_search">
                <h3 className="widget-title">Search</h3>

                <form className="search-form">
                    <label>
                        <input type="search" className="search-field" placeholder="Search..." />
                    </label>
                    <button type="submit"><i className="bx bx-search-alt"></i></button>
                </form>
            </div> */}

            <div className="widget widget_dibiz_posts_thumb">
                <h3 className="widget-title">Related Posts</h3>
                { relatedPosts && relatedPosts.map((item,index)=>{
                    return(
                        <div className="item align-items-stretch">
                            <Link to={`/${item.slug}`} className="w-25 thumb d-flex align-items-stretch">
                                {/* <span className="fullimage cover bg1" role="img"></span> */}
                                <GatsbyImage image={getImage(item.featuredimage)} alt={item.title} />
                            </Link>
                            <div className="info d-flex flex-column align-items-stretch">
                                <span>{moment(item.publishdate).format('MMM DD, YYYY')}</span>
                                <h4 className="title usmall">
                                    <Link to={`/${item.slug}`}>{item.title}</Link>
                                </h4>
                            </div>
                            <div className="clear"></div>
                        </div>
                    )
                })}
                

               
            </div>

            <div className="widget widget_categories">
                <h3 className="widget-title">Categories</h3>

                <ul>
                    { AllCategories && AllCategories.edges.map((cat, index)=>{
                        return(
                            <li key={index}><Link to={`/blog/${cat.node.uid}`} key={index}>{cat.node.name}</Link></li>
                        )
                    })}
                </ul>
            </div>

            <div className="widget widget_tag_cloud">
                <h3 className="widget-title">Popular Tags</h3>

                <div className="tagcloud">
                    { AllTags && AllTags.edges.map(({node}, index)=>{
                        return(
                            <Link to={`/blog/${node.uid}`} key={index}>{node.tag}</Link>
                        )
                    })}
                </div>
            </div>

            
        </div>
    )
}

export default BlogSidebar;