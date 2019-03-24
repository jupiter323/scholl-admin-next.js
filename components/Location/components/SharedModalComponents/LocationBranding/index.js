/* eslint-disable react/jsx-indent */
import React from 'react';
import PropTypes from 'prop-types';
import { ChromePicker } from 'react-color';

import ClickOffComponentWrapper from '../../../../ClickOffComponentWrapper';

class LocationBranding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorPickerOpen: false,
      colorPickerField: '',
    };
  }

  onSetColorPicker = (colorPickerField) => this.setState({ colorPickerOpen: true, colorPickerField });
  onCloseColorPicker = () => this.setState({ colorPickerOpen: false, colorPickerField: '' });

  render() {
    const { state: { locationUrl, headerColor1, headerColor2, headerLogoBackgroundColor, headerLogoBackgroundAlpha,
      horizontalLogoVariation, squareLogoVariation, backgroundImage, backgroundBlur, backgroundOverlayAlpha, studentWelcomeVideo,
      instructorWelcomeVideo }, handleDetailsChange } = this.props;
    const { colorPickerField, colorPickerOpen } = this.state;
    return (
      <div className="col s12 l6">
        <div className="card-block">
          <h3>Location Branding</h3>
          <div className="card-main card">
            <div className="card-content">
              <div className="row mb-0">
                <div className="input-field col s12">
                  <input
                    type="text"
                    id="location-url"
                    name="locationUrl"
                    value={locationUrl}
                    onChange={(event) => handleDetailsChange(event, 'locationUrl', 'locationBranding')}
                  />
                  <label className={locationUrl.length ? 'label active' : 'label'} htmlFor="location-url">Location Url*</label>
                </div>
              </div>
              <div className="row mb-0">
                <div className="input-field js-spectrum custom-colorpicker col s12 m6">
                  <input
                    type="text"
                    className="js-spectrum-input"
                    id="header-color-1"
                    name="headerColor1"
                    value={headerColor1}
                    onClick={() => this.onSetColorPicker('headerColor1')}
                    onChange={(event) => handleDetailsChange(event, 'headerColor1', 'locationBranding')}
                  />
                  <label className={headerColor1.length ? 'label active' : 'label'} htmlFor="header-color-1">Header Color 1*</label>
                  <If condition={colorPickerOpen && colorPickerField === 'headerColor1'}>
                    <ClickOffComponentWrapper onOuterClick={this.onCloseColorPicker}>
                      <ChromePicker
                        color={headerColor1}
                        onChange={(color) => handleDetailsChange(color, 'headerColor1', 'locationBranding')}
                      />
                    </ClickOffComponentWrapper>
                  </If>
                </div>
                <div className="input-field js-spectrum custom-colorpicker col s12 m6">
                  <input
                    type="text"
                    className="js-spectrum-input"
                    id="header-color-2"
                    name="headerColor2"
                    value={headerColor2}
                    onClick={() => this.onSetColorPicker('headerColor2')}
                    onChange={(event) => handleDetailsChange(event, 'headerColor2', 'locationBranding')}
                  />
                  <label className={headerColor2.length ? 'label active' : 'label'} htmlFor="header-color-2">Header Color 2*</label>
                  <If condition={colorPickerOpen && colorPickerField === 'headerColor2'}>
                    <ClickOffComponentWrapper onOuterClick={this.onCloseColorPicker}>
                      <ChromePicker
                        color={headerColor2}
                        onChange={(color) => handleDetailsChange(color, 'headerColor2', 'locationBranding')}
                      />
                    </ClickOffComponentWrapper>
                  </If>
                </div>
              </div>
              <div className="row mb-0">
                <div className="input-field js-spectrum custom-colorpicker col s12 m6">
                  <input
                    type="text"
                    className="js-spectrum-input"
                    id="header-logo-background-color"
                    name="headerLogoBackgroundColor"
                    value={headerLogoBackgroundColor}
                    onClick={() => this.onSetColorPicker('headerLogoBackgroundColor')}
                    onChange={(event) => handleDetailsChange(event, 'headerLogoBackgroundColor', 'locationBranding')}
                  />
                  <label className={headerLogoBackgroundColor.length ? 'label active' : 'label'} htmlFor="header-logo-background-color">Header Logo Background Color*</label>
                  <If condition={colorPickerOpen && colorPickerField === 'headerLogoBackgroundColor'}>
                    <ClickOffComponentWrapper onOuterClick={this.onCloseColorPicker}>
                      <ChromePicker
                        color={headerLogoBackgroundColor}
                        onChange={(color) => handleDetailsChange(color, 'headerLogoBackgroundColor', 'locationBranding')}
                      />
                    </ClickOffComponentWrapper>
                  </If>
                </div>
                <div className="input-field col s12 m6">
                  <input
                    type="text"
                    id="header-logo-background-alpha"
                    name="headerLogoBackgroundAlpha"
                    value={headerLogoBackgroundAlpha}
                    onChange={(event) => handleDetailsChange(event, 'headerLogoBackgroundAlpha', 'locationBranding')}
                  />
                  <label className={headerLogoBackgroundAlpha.length ? 'label active' : 'label'} htmlFor="header-logo-background-alpha">Header Logo Background Alpha*</label>
                </div>
              </div>
              <div className="row mb-0">
                <div className="file-input-custom file-field input-field col s12">
                  <div className="file-path-wrapper">
                    <input
                      className="file-path"
                      type="text"
                      id="horizontal-logo-variation"
                      name="horizontalLogoVariation"
                      value={horizontalLogoVariation}
                      onChange={(event) => handleDetailsChange(event, 'horizontalLogoVariation', 'locationBranding')}
                    />
                    <label className={horizontalLogoVariation.length ? 'label active' : 'label'} htmlFor="horizontal-logo-variation">Horizontal Logo Variation*</label>
                  </div>
                  <span className="btn-upload">
                    <span className="holder-icon"><i className="icon-upload-file"></i></span>
                    <input type="file" />
                  </span>
                </div>
              </div>
              <div className="row mb-0">
                <div className="file-input-custom file-field input-field col s12">
                  <div className="file-path-wrapper">
                    <input
                      className="file-path"
                      type="text"
                      id="square-logo-variation"
                      name="squareLogoVariation"
                      value={squareLogoVariation}
                      onChange={(event) => handleDetailsChange(event, 'squareLogoVariation', 'locationBranding')}
                    />
                    <label className={squareLogoVariation.length ? 'label active' : 'label'} htmlFor="square-logo-variation">Square Logo Variation*</label>
                  </div>
                  <span className="btn-upload">
                    <span className="holder-icon"><i className="icon-upload-file"></i></span>
                    <input type="file" />
                  </span>
                </div>
              </div>
              <div className="row mb-0">
                <div className="file-input-custom file-field input-field col s12">
                  <div className="file-path-wrapper">
                    <input
                      className="file-path"
                      type="text"
                      id="background-image"
                      name="backgroundImage"
                      value={backgroundImage}
                      onChange={(event) => handleDetailsChange(event, 'backgroundImage', 'locationBranding')}
                    />
                    <label className={backgroundImage.length ? 'label active' : 'label'} htmlFor="background-image">Background Image*</label>
                  </div>
                  <span className="btn-upload">
                    <span className="holder-icon"><i className="icon-upload-file"></i></span>
                    <input type="file" />
                  </span>
                </div>
              </div>
              <div className="row mb-0">
                <div className="col s12 m6">
                  <div className="input-field">
                    <input
                      type="text"
                      id="background-blur"
                      name="backgroundBlur"
                      value={backgroundBlur}
                      onChange={(event) => handleDetailsChange(event, 'backgroundBlur', 'locationBranding')}
                    />
                    <label className={backgroundBlur.length ? 'label active' : 'label'} htmlFor="background-blur">Background Blur*</label>
                  </div>
                </div>
                <div className="col s12 m6">
                  <div className="input-field">
                    <input
                      type="text"
                      id="background-overlay-alpha"
                      name="backgroundOverlayAlpha"
                      value={backgroundOverlayAlpha}
                      onChange={(event) => handleDetailsChange(event, 'backgroundOverlayAlpha', 'locationBranding')}
                    />
                    <label className={backgroundOverlayAlpha.length ? 'label active' : 'label'} htmlFor="background-overlay-alpha">Background Overlay Alpha*</label>
                  </div>
                </div>
              </div>
              <div className="row mb-0">
                <div className="file-input-custom file-field input-field col s12">
                  <div className="file-path-wrapper">
                    <input
                      className="file-path"
                      type="text"
                      id="student-welcome-video"
                      name="studentWelcomeVideo"
                      value={studentWelcomeVideo}
                      onChange={(event) => handleDetailsChange(event, 'studentWelcomeVideo', 'locationBranding')}
                    />
                    <label className={studentWelcomeVideo.length ? 'label active' : 'label'} htmlFor="student-welcome-video">Student Welcome Video (optional)</label>
                  </div>
                  <span className="btn-upload">
                    <span className="holder-icon"><i className="icon-upload-file"></i></span>
                    <input type="file" />
                  </span>
                </div>
              </div>
              <div className="row mb-0">
                <div className="file-input-custom file-field input-field col s12">
                  <div className="file-path-wrapper">
                    <input
                      className="file-path"
                      type="text"
                      id="instructor-welcome-video"
                      name="instructorWelcomeVideo"
                      value={instructorWelcomeVideo}
                      onChange={(event) => handleDetailsChange(event, 'instructorWelcomeVideo', 'locationBranding')}
                    />
                    <label className={instructorWelcomeVideo.length ? 'label active' : 'label'} htmlFor="instructor-welcome-video">Instructor Welcome Video (optional)</label>
                  </div>
                  <span className="btn-upload">
                    <span className="holder-icon"><i className="icon-upload-file"></i></span>
                    <input type="file" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LocationBranding.propTypes = {
  state: PropTypes.object.isRequired,
  handleDetailsChange: PropTypes.func.isRequired,
};

export default LocationBranding;
