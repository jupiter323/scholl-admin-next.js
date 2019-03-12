import React from 'react';

const Owner = () => (
  <div className="card-block">
    <h3>Owner</h3>
    <div className="owner-box card-panel" style={{ backgroundColor: '#31837a', color: '#fff' }}>
      <div className="card-panel-row row">
        <div className="col s10">
          <div className="user-block">
            <div className="user-circle" style={{ backgroundColor: '#9c27b0', color: '#fff' }}>
              <img src="images/img-owner01.jpg" alt="" />
            </div>
            <div className="user-text" style={{ color: '#fff' }}>
              <h4 className="h3">Ownerly, Jennifer</h4>
              <a href="mailto:&#106;&#101;&#110;&#046;&#111;&#119;&#110;&#101;&#114;&#108;&#121;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">&#106;&#101;&#110;&#046;&#111;&#119;&#110;&#101;&#114;&#108;&#121;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;</a>
            </div>
          </div>
        </div>
        <div className="col s2 right-align">
          <span className="block-icon">
            <i className="icon-owner"></i>
            <span className="text-icon">Owner</span>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Owner;
