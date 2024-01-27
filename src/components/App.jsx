import css from "./App.module.css";
import "modern-normalize";
import { useState, useEffect } from "react";

import { Description } from "./Description/Description";
import { Options } from "./Options/Options";
import { Feedback } from "./Feedback/Feedback";
import { Notification } from "./Notification/Notification";

const stats = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export const App = () => {
  const getLocalStorageData = () => {
    const savedFeedback = window.localStorage.getItem("my-stats");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return stats;
  };
  const [counts, setCounts] = useState(getLocalStorageData);

  useEffect(() => {
    window.localStorage.setItem("my-stats", JSON.stringify(counts));
  }, [counts]);

  const handleCounts = (value) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [value]: prevCounts[value] + 1,
    }));
  };
  const resetLocalStorageItem = () => {
    window.localStorage.removeItem("my-stats");
  };
  const resetCounts  = () => {
    setCounts({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  let totalFeedback = counts.good + counts.neutral + counts.bad;
  let percentagePositiveCounts = Math.round(
    ((counts.good + counts.neutral) / totalFeedback) * 100
  );
  return (
    <>
      <Description />
      <div className={css.wrapperFeedback}>
        <Options
          onUpdate={handleCounts}
          reset={resetCounts}
          feedbacks={totalFeedback}
        />
        {totalFeedback ? (
          <Feedback
            value={counts}
            feedbacks={totalFeedback}
            reset={resetLocalStorageItem}
            positiveClicks={percentagePositiveCounts}
          />
        ) : (
          <Notification />
        )}
      </div>
    </>
  );
};
