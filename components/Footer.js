import React from 'react';
import Link from 'next/link';
import { Tooltip } from 'react-tippy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

import NewsletterSignupForm from './NewsletterSignupForm';
import FooterNavigation from './FooterNavigation';
import { secondaryLinks } from '../globals/navigation';

const Footer = () => (
  <footer className="layout__footer">
    <div className="footer">
      <div className="footer__row footer__row--top">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <h3 className="heading--h5">Navigation</h3>
              <FooterNavigation links={secondaryLinks} />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <h3 className="heading--h5">Seneste nyheder</h3>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <h3 className="heading--h5">Nyhedsbrev</h3>
              <p>
                Tilmeld dig til vores nyhedsbrev for at modtage spændende
                opdateringer.
              </p>
              <hr />
              <NewsletterSignupForm />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <h3 className="heading--h5">Om hundeavl.dk</h3>

              <p>
                Nunc cursus libero purus ac congue arcu cursus ut sed vitae
                pulvinar massaidp nequetiam lore elerisque.
              </p>

              <p>
                <a href="mailto: support@hundeavl.dk">support@hundeavl.dk</a>
              </p>

              <ul className="list--inline">
                <li>
                  <Tooltip
                    title="Besøg os på facebook"
                    size="small"
                    animation="shift"
                    animateFill={false}
                  >
                    <a
                      href="https://facebook.com/hundeavl.dk/"
                      className="social-icon social-icon--facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip
                    title="Besøg os på Instagram"
                    size="small"
                    animation="shift"
                    animateFill={false}
                  >
                    <a
                      href="https://www.instagram.com/hundeavl.dk/"
                      className="social-icon social-icon--instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </Tooltip>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__row footer__row--bottom">
        <div className="container">
          <Link href="/">
            <a className="footer__logo">
              <img src="/images/logo--footer.svg" alt="Logo" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
