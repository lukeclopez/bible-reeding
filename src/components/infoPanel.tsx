import React from "react";

import { Container, Grid, Panel } from "rsuite";

export interface InfoPanel {
  children: React.ReactNode;
}

const InfoPanel: React.SFC<InfoPanel> = ({ children }) => {
  return (
    <Panel className="info-panel bg" shaded>
      <Container>
        <Grid fluid>{children}</Grid>
      </Container>
    </Panel>
  );
};

export default InfoPanel;
