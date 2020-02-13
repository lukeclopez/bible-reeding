import React from "react";
import { Card, CardText } from "reactstrap";

export interface TileProps {
  title: string;
  selected?: boolean;
}

const Tile: React.SFC<TileProps> = ({ selected, title }: TileProps) => {
  const cName = "tile " + (!selected && "text-muted");
  return (
    <Card className={"tile text-center " + cName} outline color="secondary">
      <CardText>{title}</CardText>
    </Card>
  );
};

export default Tile;
