import * as React from "react";

import { useSelector } from "react-redux";

import countVersesBetween from "./../data/countVersesBetween";

export interface ResultProps {}

const Result: React.SFC<ResultProps> = () => {
  const selections = useSelector((state: any) => {
    return state;
  });
  const { start, end } = selections;
  const verses = countVersesBetween(start, end);

  return <>{verses}</>;
};

export default Result;
