import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Footer extends Component{
    render(){
        return (
            <div className="container mt-5" role="footer">

        <div className="copyright pt-3 row" role="social links">

            <ul class="col-12 mt-1">
                <li>
                    <a href="#" aria-label="Twitter"> <span className="fab fa-twitter-square"></span></a>
                </li>
                <li>
                    <a href="#" aria-label="Facebook"> <span className="fab fa-facebook-square"></span></a>
                </li>
                <li>
                    <a href="#" aria-label="Google Plus"> <span className="fab fa-google-plus-square"></span></a>
                </li>
                <li>
                    <a href="#" aria-label="instagram"> <span className="fab fa-instagram"></span></a>
                </li>
            </ul>


            <div>
            </div>
            <div className="w-100 my-1"></div>
            <p className="col-12"> © Copyright 2019 Yiren Qu </p>
            <p className="col-12 pb-3">All Rights Reserved. Data is from <a href="yelp.com">Yelp.com</a></p>
        </div>
    </div>
        )
    }
}
