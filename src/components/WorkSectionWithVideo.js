import React, { Component } from "react";
 
class WorkSectionWithVideo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      videoPlaying: false,
      images: [this.props.contentObj.backgroundImage],
      videoVisible: false
    };
  };

  componentDidMount() {
    this.refs.vidRef.addEventListener('ended', () => this.stopVideo());
  }

  stopVideo() {
    this.setState({
      videoPlaying: false,
      videoVisible: false,
    });
    this.refs.vidRef.currentTime = 0;
  }

  replayVideo() {
    if (!this.state.videoPlaying) {
      this.setState({
        videoPlaying: true,
        videoVisible: true
      });
      this.refs.vidRef.play();
    }
  }

  renderSquare(text) {
    return <li>text</li>;
  }

  render() {
    let backgroundImage = 'url(' + this.state.images[0] + ')';
    if (this.state.videoVisible) {
      backgroundImage = 'none';
    }

    return (
      <div id={this.props.contentObj.id} className="content">
        <div className="section-left">
          <div className="text-container">
            <h1>{this.props.contentObj.title}</h1>
            <h4>Role</h4>
            <p>{this.props.contentObj.role_line_1}<br/>{this.props.contentObj.role_line_2}</p>
            <h4>Company</h4>
            <p>
              {this.props.contentObj.company}
            </p>
            <h4>Milestones</h4>
            <p>
              {this.props.contentObj.milestones}
            </p>
            <h4>What I did</h4>
            <ul>
              {
                this.props.contentObj.work.map ( (n, i) => {
                  return <li key={i}>{n}</li>
                })
              }
            </ul>
          </div>
        </div>
        <div
          className={`section-right ${this.state.videoVisible ? 'videoVisible' : 'videoNotVisible'}`}
          style={
            {
              "backgroundImage": backgroundImage,
            }
          }
        >
          <button
            onClick={this.replayVideo.bind(this)}
            className={`replayButton ${this.state.videoPlaying ? 'hidden' : 'visible'}`}
          >
            <span role="img" aria-label="hand">🎬</span>&nbsp;{this.props.contentObj.buttonCopy}
          </button>
          <video
            ref="vidRef"
            src={this.props.contentObj.videoElement}
          ></video>
        </div>
      </div>
    );
  }
}
 
export default WorkSectionWithVideo;
