import React, { useState } from "react";
import PropTypes from 'prop-types';
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
  InstapaperShareButton
} from 'react-share';

const Share = ({ socialConfig, tags }) => {
    return(
      <>
      <ul className="social">
            <li><span>Share:</span></li>
            <li>
              <FacebookShareButton url={socialConfig.config.url} quote={socialConfig.config.title} hashtag={""} className="facebook d-flex justify-content-center align-items-center" >
                <i className='bx bxl-facebook'></i>
              </FacebookShareButton>
            </li>
            <li>
              <TwitterShareButton url={socialConfig.config.url} quote={socialConfig.config.title} className="twitter d-flex justify-content-center align-items-center">
                <i className='bx bxl-twitter'></i>
              </TwitterShareButton>
            </li>
            <li>
              <LinkedinShareButton url={socialConfig.config.url} quote={socialConfig.config.title} className="linkedin d-flex justify-content-center align-items-center">
                <i className='bx bxl-linkedin'></i>
              </LinkedinShareButton>
            </li>
            <li>
              <TwitterShareButton url={socialConfig.config.url} title={socialConfig.config.title} className="instagram d-flex justify-content-center align-items-center">
                <i className='bx bxl-instagram'></i>
              </TwitterShareButton>
            </li>
        </ul>        
      </>
)};

Share.propTypes = {
	socialConfig: PropTypes.shape({
		twitterHandle: PropTypes.string.isRequired,
		config: PropTypes.shape({
			url: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		}),
	}).isRequired,
	tags: PropTypes.arrayOf(PropTypes.string),
};
Share.defaultProps = {
	tags: [],
};

export default Share;