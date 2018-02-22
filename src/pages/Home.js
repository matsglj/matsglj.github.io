import React, { Component } from "react";
import ImageSlider from "../components/ImageSlider";
import profile from '../images/about/profile_optimized.jpg';
 
class Home extends Component {
  render() {
    const images = [profile];

    return (
      <div className="content">
        <div className="section-left">
          <div className="text-container">
            <h1>Hello <span role="img" aria-label="hand">👋</span></h1>
            <p className="large">I'm a product designer with a passion for technology, splitting my time between Oslo and Chicago. I'm currently creating collaboration tools at Huddly Inc.</p>
          </div>
        </div>
        <ImageSlider images={images} />
      </div>
    );
  }
}
 
export default Home;
