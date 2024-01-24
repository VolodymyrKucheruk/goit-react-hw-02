import css from "./App.module.css";
import "modern-normalize";
import { useState, useEffect } from "react";

import { Description } from "./Description/Description";
import { Options } from "./Options/Options";
import { Feedbeck } from "./Feedbeck/Feedbeck";
import { Notification } from "./Notification/Notification";

const stats = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export const App = () => {
  const getLocalStorageData = () => {
    const savedFeedbeck = window.localStorage.getItem("my-stats");
    if (savedFeedbeck !== null) {
      return JSON.parse(savedFeedbeck);
    }
    return stats;
  };
  const [clicks, setClicks] = useState(getLocalStorageData);

  useEffect(() => {
    window.localStorage.setItem("my-stats", JSON.stringify(clicks));
  }, [clicks]);

  const handleClick = (value) => {
    setClicks((prevClicks) => ({
      ...prevClicks,
      [value]: prevClicks[value] + 1,
    }));
  };
  const resetLokalStorage = () => {
    window.localStorage.clear();
  };
  const resetArr = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  let totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  let percentagePositiveClick = Math.round(
    ((clicks.good + clicks.neutral) / totalFeedback) * 100
  );
  return (
    <>
      <Description />
      <div className={css.wrapperFeedbeck}>
        <Options
          onUpdate={handleClick}
          reset={resetArr}
          feedbecks={totalFeedback}
        />
        {totalFeedback ? (
          <Feedbeck
            value={clicks}
            feedbecks={totalFeedback}
            reset={resetLokalStorage}
            positiveClicks={percentagePositiveClick}
          />
        ) : (
          <Notification />
        )}
      </div>
    </>
  );
};
