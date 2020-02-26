import React, { useState } from "react";

import { useSelector } from "react-redux";
import deepEqual from "deep-equal";

import InfoPanel from "./infoPanel";
import countVersesBetween from "../countVersesBetween";

export interface ResultProps {}

const Result: React.SFC<ResultProps> = () => {
  const [prevState, setPrevState] = useState<any>(null);

  // I compare `prevState` to `state` because
  // the default equality function is given
  // two copies of `state`.
  const eqChecker = (state: any) => {
    if (!deepEqual(state, prevState)) {
      setPrevState(state);
      return false;
    }
    return true;
  };

  const state = useSelector((state: any) => {
    return state;
  }, eqChecker);
  const { start, end } = state;

  const verses = countVersesBetween(start, end);
  const valid = verses > 0;

  return (
    <InfoPanel>
      {valid ? (
        <>
          There {verses > 1 ? "are" : "is"} {verses} verse
          {verses > 1 ? "s" : ""} between {start.book} {start.chapter}:
          {start.verse} and {end.book} {end.chapter}:{end.verse}.
        </>
      ) : (
        "Please make sure your starting point is before your ending point."
      )}
    </InfoPanel>
  );
};

export default Result;
