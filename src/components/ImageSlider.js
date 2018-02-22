import React, { Component } from "react";
 
class ImageSlider extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      image: this.props.images[0],
      playing: this.props.playing
    };
  };

  toggleImages(i) {
    setInterval(() => this.setState({
      image: this.props.images[i],
    }), 3000+3000*i);
  }
  
  componentDidMount() {
    if (this.state.playing) {
      for (var i = 0; i <= (this.props.images.length-1); i++) {
        this.toggleImages(i);
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div
        className="section-right"
        style={{"backgroundImage": `url(${this.state.image})`}}
      >
      </div>
    );
  }
}
 
export default ImageSlider;