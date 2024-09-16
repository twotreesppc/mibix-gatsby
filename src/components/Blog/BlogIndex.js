import React, { useReact } from "react"
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import BlogItem from "./BlogItem";
import Paginate from './Paginate';
const BlogIndex = ({data, currentPage, numPages, path}) => {
return(
   <div className="blog-area bg-f9f9f9 ptb-100">
      <div className="container">
             <div className="row">
             { data && data.map((item,index)=> <BlogItem key={index} data={item}/>)}
             {numPages>1 && <Paginate currentPage={currentPage} numPages={numPages} path={path ? path : 'blog'}/>}   
            </div>
        </div>
     </div>
);
};
export default BlogIndex;