import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faGooglePlus, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default class Footer extends Component {
    //Footer Components. This component displays social media icons, copyright info and rights.
    render() {
        return (
            <div className="container mt-5" >

                <div className="copyright pt-3 row" >

                    <ul className="col-12 mt-1">
                        <li>
                            <a href="http://www.twitter.com" aria-label="Twitter"> <FontAwesomeIcon icon={faTwitter} /></a>
                        </li>
                        <li>
                            <a href="http://www.facebook.com" aria-label="Facebook"> <FontAwesomeIcon icon={faFacebook} /></a>
                        </li>
                        <li>
                        <a href="http://www.google.com" aria-label="Google Plus"> <FontAwesomeIcon icon={faGooglePlus} /></a>
                        </li>
                        <li>
                        <a href="http://www.instgram.com" aria-label="Instgram"> <FontAwesomeIcon icon={faInstagram} /></a>
                        </li>
                    </ul>
                    <div>
                    </div>
                    <div className="w-100 my-1"></div>
                    <p className="col-12"> © Copyright 2019</p>
                    <p className="col-12 pb-3">All Rights Reserved. Data is from <a href="yelp.com" id="yelp">Yelp.com</a></p>
                </div>
            </div>
        )
    }
}
