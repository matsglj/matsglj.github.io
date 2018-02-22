import React, { Component } from "react";
import ImageSlider from "../components/ImageSlider";
import cover from '../images/work/cover.jpg';
 
class Work extends Component {
  render() {
    const images = [cover];

    return (
      <div className="content">
        <div className="section-left">
          <div className="text-container">
            <h1>About my work</h1>
            <p>
              I have worked on a variety of projects. What they share is the goal of delivering a great digital experience for end users. The platforms I have worked on include the internet, iOS, Android, macOS and Windows applications. The industries span across websites, ecommerce, SaaS, real estate and consumer electronics.
            </p>
            <p>
              My work process requires close collaboration and feedback. I work closely with users to create experiences that make a positive impact, and with engineers to explore the possibilities of technology.
            </p>
            <p>
              Every project is different, but I typically employ product research, user research, prototyping, user testing and visual design in my process. I aspire to be a champion of user-centered design throughout design, development and delivery of a product.
            </p>
          </div>
        </div>
        <ImageSlider images={images} />
      </div>
    );
  }
}
 
export default Work;