import React, { Component } from "react";
import WorkSectionWithVideo from "../components/WorkSectionWithVideo";
import cover from '../images/macandmia/cover_optimized.jpg';
import videoElement from '../images/macandmia/video.mov';
 
class Macandmia extends Component {
  render() {
    const contentObj = {
      id: "macandmia",
      title: "Mac & Mia",

      backgroundImage: cover,
      videoElement: videoElement,

      role_line_1: "UX/UI Designer & Engineer",
      role_line_2: "2015-2016",

      company: "Mac & Mia aims to be the most friendly and personalized kids shopping experience out there, offering parents an easy way to add curated items of style and quality to their children's wardrobes.",

      milestones: "Mac & Mia grew by over 3000% during my tenure. Covered by US Weekly, Huffington Post, Chicago Tribune.",

      work: ["Led online customer experience", "Designed customer onboarding, product discovery, and product evaluation features", "Used data to drive design", "Built services for stylists, internal sales, warehouse and fulfillment teams.", "Contribute to packaging, print and photography projects"],

      buttonCopy: 'Watch "Style Survey"', 
    };

    return (
      <WorkSectionWithVideo contentObj={contentObj}/>
    );
  }
}

export default Macandmia;
