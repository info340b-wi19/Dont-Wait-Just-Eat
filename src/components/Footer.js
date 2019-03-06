import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faGooglePlus, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default class Footer extends Component {
    render() {
        return (
            <div className="container mt-5" role="footer">

                <div className="copyright pt-3 row" role="social links">

                    <ul className="col-12 mt-1">
                        <li>
                            <a href="#" aria-label="Twitter"> <FontAwesomeIcon icon={faTwitter} /></a>
                        </li>
                        <li>
                            <a href="#" aria-label="Facebook"> <FontAwesomeIcon icon={faFacebook} /></a>
                        </li>
                        <li>
                        <a href="#" aria-label="Google Plus"> <FontAwesomeIcon icon={faGooglePlus} /></a>
                        </li>
                        <li>
                        <a href="#" aria-label="Instgram"> <FontAwesomeIcon icon={faInstagram} /></a>
                        </li>
                    </ul>
                    <div>
                    </div>
                    <div className="w-100 my-1"></div>
                    <p className="col-12"> © Copyright 2019 Yiren Qu &amp; Xifei Wang</p>
                    <p className="col-12 pb-3">All Rights Reserved. Data is from <a href="yelp.com" style={{"color":"white"}}>Yelp.com</a></p>
                </div>
            </div>
        )
    }
}
