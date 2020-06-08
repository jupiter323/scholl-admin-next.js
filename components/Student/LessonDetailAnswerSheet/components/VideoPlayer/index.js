import * as React from "react";
import PropTypes from "prop-types";
import Slider from "react-input-slider";

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 0,
      currentTime: 0,
      duration: 0,
      play: true,
      pause: false,
      volumeUp: true,
      volumeOff: false,
      replay: false,
      ended: false,
      fullscreen: false,
    };
  }

    videoLoaded = () => {
      this.volumeBar = this.video.volume;
      this.setState({
        duration: this.video.duration,
        currentTime: 0,
        play: true,
        pause: false,
        volumeUp: true,
        volumeOff: false,
        replay: false,
        ended: false,
      });
      this.timeEndLabel.innerText = this.calcTime(this.video.duration);
    };

    calcTime = time => {
      const min = Math.floor(Math.floor(time) / 60);
      const sec = Math.floor(time) % 60;
      return `${min < 10 ? `0${min}` : min} : ${sec < 10 ? `0${sec}` : sec}`;
    };

    handleVideoEnded = () => {
      this.initPlayVideoState();
    }

    moveSeek = () => {
      this.setState({
        currentTime: this.video.currentTime,
      });
      this.timeStartLabel.innerText = this.calcTime(this.video.currentTime);
    };

    playVideo = () => {
      this.video.play();
      this.reverseVideoPlayState();
      const { onHandleWatchedVideo } = this.props;
      onHandleWatchedVideo('STARTED');
    };
    reverseVideoPlayState = () => {
      this.setState({
        play: !this.state.play,
        pause: !this.state.pause,
      });
    }
    handleClickVolume = () => {
      const { volumeUp, volumeOff } = this.state;
      if (volumeUp) {
        this.video.volume = 0;
      } else {
        this.video.volume = this.volumeBar.value;
      }
      this.setState({
        volumeUp: !volumeUp,
        volumeOff: !volumeOff,
      });
    }
    pauseVideo = () => {
      this.video.pause();
      this.reverseVideoPlayState();
      const { onHandleWatchedVideo } = this.props;
      onHandleWatchedVideo('STOPPED');
    };

    showVolumeBar = () => {
      this.volumeBarContainer.style.opacity = 1;
    };

    hideVolumeBar = () => {
      this.volumeBarContainer.style.opacity = 0;
    };

    fullScreen = () => {
      if (this.state.fullscreen) {
        document.exitFullscreen();
        this.setState({ fullscreen: false });
      } else {
        this.videoWrap.requestFullscreen();
        this.setState({ fullscreen: true });
      }
    };

    changeVolume = e => {
      this.video.volume = e.currentTarget.value;
    };

    replayVideo = () => {
      this.setState({
        play: true,
        pause: false,
        replay: false,
      });
      this.video.currentTime = 0;
    }
    handleChangeTimeSlider = (x) => {
      const { play } = this.state;
      if (play && this.video.currentTime === parseFloat(this.state.duration.toFixed(2)) - 0.01) {
        this.initPlayVideoState();
      } else {
        this.setState({ currentTime: parseFloat(x.toFixed(2)) });
        this.video.currentTime = parseFloat(x.toFixed(2));
      }
    }

    initPlayVideoState = () => {
      this.setState({
        replay: true,
        play: false,
        pause: false,
        currentTime: 0,
      });
    }
    render() {
      const { url } = this.props;
      const { pause, play, replay, volumeUp, volumeOff } = this.state;
      return (
            <>
                <div
                  id="video-player"
                  ref={
                    videoWrap => {
                      this.videoWrap = videoWrap;
                    }
                  }
                >
                  <video
                    className="in-modal embed-responsive-item"
                    id="video-source"
                    ref={video => {
                      this.video = video;
                    }}
                    src={url}
                    preload="metadata"
                    playsInline
                    onLoadedData={this.videoLoaded}
                    onTimeUpdate={this.moveSeek}
                    volume={this.state.volume}
                    onEnded={this.handleVideoEnded}
                  />
                  <div id="video-control">
                    <If condition={play}>
                      <button
                        id="play-button"
                        name="play"
                        ref={c => (this.playButton = c)}
                        onClick={this.playVideo}
                      >
                        <i className="material-icons">play_arrow</i>
                      </button>
                    </If>
                    <If condition={pause}>
                      <button
                        id="pause-button"
                        ref={c => (this.pauseButton = c)}
                        onClick={this.pauseVideo}
                      >
                        <i className="material-icons">pause</i>
                      </button>
                    </If>
                    <If condition={replay}>
                      <button
                        id="replay-button"
                        name="replay"
                        ref={c => (this.replayButton = c)}
                        onClick={this.replayVideo}
                      >
                        <i className="material-icons">replay</i>
                      </button>
                    </If>

                    <div id="seek-bar">
                      <label
                        id="time-start-label"
                        ref={label => {
                          this.timeStartLabel = label;
                        }}
                        style={{
                          marginRight: '20px',
                        }}
                      >
                                00 : 00
                      </label>
                      <Slider
                        id="time-progress"
                        axis="x"
                        xmax={this.state.duration}
                        x={this.state.currentTime}
                        styles={{
                          track: {
                            width: '350px',
                            backgroundColor: 'rgba(0,162,232,.25)',
                          },
                          active: {
                            backgroundColor: '#00a2e8',
                          },
                          thumb: {
                            width: 15,
                            height: 15,
                            backgroundColor: '#00a2e8',
                          },
                        }}
                        xstep={0.01}
                        onChange={({ x }) => this.handleChangeTimeSlider(x)}
                      />
                      <label
                        id="time-end-label"
                        ref={label => {
                          this.timeEndLabel = label;
                        }}
                        style={{
                          marginLeft: '20px',
                        }}
                      >
                                00 : 00
                      </label>
                    </div>
                    <div
                      id="volume-bar-container"
                      ref={c => (this.volumeBarContainer = c)}
                      onMouseOver={this.showVolumeBar}
                    >
                      <input
                        id="volume-bar"
                        name="volume"
                        ref={c => (this.volumeBar = c)}
                        type="range"
                        min={0}
                        max={1}
                        step="0.01"
                        onChange={e => this.changeVolume(e)}
                        defaultValue={0.5}
                      />
                    </div>
                    <button
                      id="full-screen-button"
                      onClick={this.fullScreen}
                    >
                      <i className="material-icons">fullscreen</i>
                    </button>
                    <If condition={volumeUp}>
                      <button
                        id="volume-button"
                        onMouseOver={this.showVolumeBar}
                        onMouseOut={this.hideVolumeBar}
                        onClick={this.handleClickVolume}
                      >
                        <i className="material-icons">volume_up</i>
                      </button>
                    </If>
                    <If condition={volumeOff}>
                      <button
                        id="volume-button"
                        onMouseOver={this.showVolumeBar}
                        onMouseOut={this.hideVolumeBar}
                        onClick={this.handleClickVolume}
                      >
                        <i className="material-icons">volume_off</i>
                      </button>
                    </If>
                  </div>
                </div>

                <style jsx>
                  {`
            a {
              color: #343434;
            }
            * {
              outline: none;
            }

            #video-player {
              position: relative;
              width: 100%;
            }

            #video-player video {
              position: relative;
              width: 100%;
            }

            #video-player #video-control {
              position: relative;
              width: 100%;
              height: 30px;
              transform: translate(0, -30px);
              z-index: 2147483647;
            }

            #video-player #video-control i {
              color: white;
            }

            #video-player #video-control label {
              color: #00a2e8;
            }

            #video-player #video-control button {
              border: none;
              width: 30px;
              height: 30px;
              justify-content: center;
              background: #00a2e8;
              z-index: 2147483647;
            }

            #play-button,
            #pause-button {
              float: left;
            }

            #seek-bar {
              width: calc(100% - 150px);
              padding-top: 10px;
              text-align: center;
              justify-content: center;
            }

            .input-range {
              width: 100px !important;
            }

            #volume-button,
            #full-screen-button {
              float: right;
            }

            #volume-bar-container {
              position: absolute;
              padding: 0 5px;
              background: rgba(0, 0, 0, 0.5);
              transform: rotate(-90deg);
              margin-left: 27px;
              margin-top: -68px;
              opacity: 0;
            }

            #volume-bar {
              width: 90px;
            }

            #video-player #video-control * {
              display: inline-flex;
            }
            video::-webkit-media-controls {
                display:none !important;
              }
            video::-webkit-media-controls-enclosure {
                display:none !important;
            }
          `}
                </style>
            </>
      );
    }
}
VideoPlayer.propTypes = {
  url: PropTypes.string,
  onHandleWatchedVideo: PropTypes.func.isRequired,
};
export default VideoPlayer;
