import React, { Component } from "react";
import ImageSlider from "../components/ImageSlider";

class Contact extends Component {
  render() {
    return (
      <div id="contact" className="content">
        <div className="section-left">
          <div className="text-container">
            <h1>Contact</h1>
            <p className="large">I'm always interested in new projects. Feel free to reach out to me at <a href="mailto:contact@matsglj.com" target="_top">contact@matsglj.com</a></p>
          </div>
        </div>
        <ImageSlider images={[]} />
      </div>
    );
  }
}
 
export default Contact;