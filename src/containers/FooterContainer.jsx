import React from 'react';

import logoLight from '../assets/img/logo-light.png';

const FooterContainer = () => (
  <footer className="footer-2 bg-dark">
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <a href="/">
            <img className="image-xxs fade-half" alt="Pic" src={logoLight} />
          </a>
        </div>
        <div className="col-sm-4 text-center">
          <span className="fade-half">© Copyright 2018 PakigXpress - All Rights Reserved</span>
        </div>
        <div className="col-sm-4 text-right">
          <ul className="list-inline social-list">
            <li>
              <a href="/">
                <i className="ti-twitter-alt" />
              </a>
            </li>
            <li>
              <a href="/">
                <i className="ti-facebook" />
              </a>
            </li>
            <li>
              <a href="/">
                <i className="ti-dribbble" />
              </a>
            </li>
            <li>
              <a href="/">
                <i className="ti-vimeo-alt" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterContainer;
