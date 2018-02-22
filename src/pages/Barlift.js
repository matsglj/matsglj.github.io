import React, { Component } from "react";
import WorkSectionWithVideo from "../components/WorkSectionWithVideo";
import cover from '../images/barlift/cover_optimized.jpg';
import videoElement from '../images/barlift/video.mov';
 
class Barlift extends Component {
  render() {
    const contentObj = {
      id: "barlift",
      title: "BarLift",

      backgroundImage: cover,
      videoElement: videoElement,

      role_line_1: "Co-founder",
      role_line_2: "2014-2015",

      company: "BarLift sends you deals from bars and restaurants around you. Download the app to see who’s interested in going out and nudge friends to get them to join you. For college bars leverage a new platform to reach students that want to go out.",

      milestones: "BarLift gained over 2700 users (32% of Northwestern's undergraduate population) as weekly active users and over 28 local bars used our service.",

      work: ["Designed iOS and Android apps for students, and an analytics platform for bars.", "Led ethnographic research", "Conducted user interviews, user testing, prototyping", "Managed iTunes Connect and Google Play approval process", "Co-led launch campaign"],

      buttonCopy: 'Watch "Event nudges"', 
    };

    return (
      <WorkSectionWithVideo contentObj={contentObj}/>
    );
  }
}

export default Barlift;
