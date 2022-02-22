import React from 'react';
import { Link } from "gatsby"

const BlogSidebar = () => {
    return (
        <div className="widget-area">
            <div className="widget widget_search">
                <h3 className="widget-title">Search</h3>

                <form className="search-form">
                    <label>
                        <input type="search" className="search-field" placeholder="Search..." />
                    </label>
                    <button type="submit"><i className="bx bx-search-alt"></i></button>
                </form>
            </div>

            <div className="widget widget_dibiz_posts_thumb">
                <h3 className="widget-title">Popular Posts</h3>

                <div className="item">
                    <Link to="/single-blog-1" className="thumb">
                        <span className="fullimage cover bg1" role="img"></span>
                    </Link>
                    <div className="info">
                        <span>June 10, 2020</span>
                        <h4 className="title usmall">
                            <Link to="/single-blog-1">
                                The Data Surrounding Higher Education
                            </Link>
                        </h4>
                    </div>

                    <div className="clear"></div>
                </div>

                <div className="item">
                    <Link to="/single-blog-1" className="thumb">
                        <span className="fullimage cover bg2" role="img"></span>
                    </Link>
                    <div className="info">
                        <span>June 21, 2020</span>
                        <h4 className="title usmall">
                            <Link to="/single-blog-1">
                                Conversion Rate the Sales Funnel Optimization
                            </Link>
                        </h4>
                    </div>

                    <div className="clear"></div>
                </div>

                <div className="item">
                    <Link to="/single-blog-1" className="thumb">
                        <span className="fullimage cover bg3" role="img"></span>
                    </Link>
                    <div className="info">
                        <span>June 30, 2020</span>
                        <h4 className="title usmall">
                            <Link to="/single-blog-1">
                                Business Data is changing the world’s Energy
                            </Link>
                        </h4>
                    </div>

                    <div className="clear"></div>
                </div>
            </div>

            <div className="widget widget_categories">
                <h3 className="widget-title">Categories</h3>

                <ul>
                    <li><a href="#">Design <span className="post-count">(03)</span></a></li>
                    <li><a href="#">Lifestyle <span className="post-count">(05)</span></a></li>
                    <li><a href="#">Script <span className="post-count">(10)</span></a></li>
                    <li><a href="#">Device <span className="post-count">(08)</span></a></li>
                    <li><a href="#">Tips <span className="post-count">(01)</span></a></li>
                </ul>
            </div>

            <div className="widget widget_tag_cloud">
                <h3 className="widget-title">Popular Tags</h3>

                <div className="tagcloud">
                    <a href="#">Business <span className="tag-link-count">(3)</span></a>
                    <a href="#">Design <span className="tag-link-count">(3)</span></a>
                    <a href="#">Aike <span className="tag-link-count">(2)</span></a>
                    <a href="#">Fashion <span className="tag-link-count">(2)</span></a>
                    <a href="#">Travel <span className="tag-link-count">(1)</span></a>
                    <a href="#">Smart <span className="tag-link-count">(1)</span></a>
                    <a href="#">Marketing <span className="tag-link-count">(1)</span></a>
                    <a href="#">Tips <span className="tag-link-count">(2)</span></a>
                </div>
            </div>

            
        </div>
    )
}

export default BlogSidebar;