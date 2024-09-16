import React from 'react';

import PartnerImg1 from "../../assets/images/partner/william-jessup-university.png"
import PartnerImg2 from "../../assets/images/partner/standard-media-group.png"
import PartnerImg3 from "../../assets/images/partner/shared-equity-finance.png"
import PartnerImg4 from "../../assets/images/partner/marquee-law-group.png"
import PartnerImg5 from "../../assets/images/partner/interstate-oil-company.png"
import PartnerImg6 from "../../assets/images/partner/associated-management-concepts.png"

const Partner = () => {
    return (
        <div className="partner-area bg-f9f9f9 ptb-70">
            <div className="container">
                <div className="row align-items-center justify-content-md-center">
                    <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                        <div className="single-partner-item">
                            <img src={PartnerImg6} alt="Association Management Concepts" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                        <div className="single-partner-item">
                            <img src={PartnerImg2} alt="Standard Media Group" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                        <div className="single-partner-item">
                            <img src={PartnerImg3} alt="Shared Equity Finance" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                        <div className="single-partner-item">
                            <img src={PartnerImg4} alt="Marquee Law Group" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                        <div className="single-partner-item">
                            <img src={PartnerImg1} alt="William Jessup University" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                        <div className="single-partner-item">
                            <img src={PartnerImg5} alt="Interstate Oil Company" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partner;