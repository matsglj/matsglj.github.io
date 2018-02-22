import React, { Component } from "react";
import WorkSectionWithVideo from "../components/WorkSectionWithVideo";
import cover from '../images/huddly/cover_optimized.jpg';
import videoElement from '../images/huddly/video.mp4';
 
class Huddly extends Component {
  render() {
    const contentObj = {
      id: "huddly",
      title: "Huddly",
      backgroundImage: cover,
      videoElement: videoElement,
      role_line_1: "Product Designer",
      role_line_2: "2016-Present",

      company: "Huddly is a computer vision company. Its first product is Huddly GO, an intelligent camera built for collaboration and team video meetings.",
      
      milestones: "Google selected Huddly GO for their Hangouts Meet product.",

      work: ["User experience on desktop, mobile, and web", "Product development spanning digital & physical", "Develop features with computer vision", "Service design", "Product marketing"],

      buttonCopy: 'Watch "Onboarding UX"', 
    };

    return (
      <WorkSectionWithVideo contentObj={contentObj}/>
    );
  }
}
 
export default Huddly;