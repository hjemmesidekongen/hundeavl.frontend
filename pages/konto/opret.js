import React from 'react';

import Content from '../../components/Content';

const HomePage = () => (
  <Content heading="Opret en ny konto">
    <div className="container">
      <div className="box">
        <div className="box__content">
          <div className="row">
            <div className="col-md-6">
              <div className="form-item">
                <label htmlFor="firstName">Fornavn</label>
                <input type="text" id="firstName" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-item">
                <label htmlFor="lastName">Efternavn</label>
                <input type="text" id="lastName" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Content>
);

export default HomePage;
