import React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS } from '@contentful/rich-text-types';
import Img from 'gatsby-image';
// import ImageWithText from '../ImageWithText';
// import ArticlePhotoGrid from '../ArticlePhotoGrid';

const config = {
  renderMark: {},
  renderNode: {
    [BLOCKS.HEADING_3]: (_node, children) => (
      <h3>{children}</h3>
    ),
    [BLOCKS.HEADING_2]: (_node, children) => (
      <h2>
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_4]: (_node, children) => <h4>{children}</h4>,
    [BLOCKS.HEADING_5]: (_node, children) => <h5>{children}</h5>,
    [BLOCKS.HEADING_6]: (_node, children) => <h5>{children}</h5>,
    [BLOCKS.PARAGRAPH]: (_node, children) => (
      <p>{children}</p>
    ),
    [BLOCKS.UL_LIST]: (node) => (
      <ul className="list-disc m-3">
        {node.content.map((cont, index) => (
          <li key={index} className="text-default font-normal leading-8 mb-3">
            {cont.content[0].content[0].value}
          </li>
        ))}
      </ul>
    ),
    [BLOCKS.OL_LIST]: (node) => (
      <ul>
        {node.content.map((cont, index) => (
          <li key={index} className="text-default font-normal mb-3">
            {cont.content[0].content[0].value}
          </li>
        ))}
      </ul>
    ),
    
    
  },
};

const RichText = ({ content }) => {
  return <div className="my-4">{content && renderRichText(content, config)}</div>;
};

export default RichText;