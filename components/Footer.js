import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

import FooterNavigation from './FooterNavigation';
import { secondaryLinks } from '../globals/navigation';

const Footer = () => (
  <footer className="layout__footer">
    <div className="footer">
      <div className="footer__row footer__row--top">
        <div className="container">
          <div className="row">
            <div className="col col-sm-3">
              <h3 className="heading--h5">Navigation</h3>
              <FooterNavigation links={secondaryLinks} />
            </div>
            <div className="col col-sm-3">
              <h3 className="heading--h5">Seneste nyheder</h3>
            </div>
            <div className="col col-sm-3">
              <h3 className="heading--h5">Tilmeld nyhedsbrev</h3>
            </div>
            <div className="col col-sm-3">
              <h3 className="heading--h5">Om hundeavl.dk</h3>

              <p>
                Nunc cursus libero purus ac congue arcu cursus ut sed vitae
                pulvinar massaidp nequetiam lore elerisque.
              </p>

              <p>
                <a href="mailto: support@hundeavl.dk">support@hundeavl.dk</a>
              </p>

              <div className="social-icon-list">
                <a
                  href="https://facebook.com/hundeavl.dk#"
                  className="social-icon social-icon--facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Besøg os på facebook"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>

                <a
                  href="https://instagram.com/hundeavl.dk#"
                  className="social-icon social-icon--instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Besøg os på Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__row footer__row--bottom">
        <div className="container">
          <Link href="/">
            <a>
              <img src="/images/logo.png" alt="Logo" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
