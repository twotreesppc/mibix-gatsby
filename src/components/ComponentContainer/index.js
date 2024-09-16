import React from 'react';
import BlockquoteSection from '../BlockquoteSection';
import RichText from '../RichText';
import ImageSection from '../ImageSection';


// import Banner from '../Banner';
// import ImageGallery from '../ImageGallery';
// import PromoCardList from '../PromoCardList';
// import Tabs from '../Tabs';
// import ContactList from '../ContactList';
// import AccordionComponent from '../AccordionComponent';

// import VideoEmbed from '../VideoEmbed';
// import ArticlePhotoGrid from '../ArticlePhotoGrid';
// import { SignUpForm } from '../EnquiryForm';

const ComponentContainer = ({ data }) => {
  const renderComponent = (data) => {
    switch (data.__typename) {
      case 'ContentfulSectionImage':
        return <ImageSection image={data.image} />;
      case 'ContentfulSectionBlockquote':
        return <BlockquoteSection content={data.content} />;
      case 'ContentfulSectionContent':
        return <RichText content={data.content} />;
      case 'ContentfulRichText':
        return (
          <div className="container mx-auto px-4 lg:px-0">
              <RichText content={data.content} />
          </div>
        );
      default:
        return <></>;
    }
  };
  return <section className="mb-10">{renderComponent(data)}</section>;
};

export default ComponentContainer;
