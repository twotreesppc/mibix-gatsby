import React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS } from '@contentful/rich-text-types';


const config = {
  renderMark: {},
  renderNode: {
    [BLOCKS.HEADING_3]: (_node, children) => (
      <h3>{children}</h3>
    ),
    [BLOCKS.HEADING_2]: (_node, children) => (
      <h2 className="mb-5 leading-9 lg:leading-10 text-3xl lg:text-3xlm">
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
      <ul className="list-disc m-5">
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

const BlockquoteSection = ({ content }) => {
  return <blockquote className="wp-block-quote">{content && renderRichText(content, config)}</blockquote>;
};

export default BlockquoteSection;