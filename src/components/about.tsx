import React from "react";

import { Row } from "rsuite";

import InfoPanel from "./infoPanel";

export interface AboutProps {}

const About: React.SFC<AboutProps> = () => {
  return (
    <InfoPanel>
      <Row className="header">About</Row>
      <Row>
        <a href="https://github.com/lukeclopez/bible-reeding">
          View Source on Github
        </a>
      </Row>
    </InfoPanel>
  );
};

export default About;
