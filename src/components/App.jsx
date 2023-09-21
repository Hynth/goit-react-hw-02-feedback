import FeedbackWidget from "./FeedbackWidget";
import { useState } from "react";

export const App = () => {
  const [feedback, setFeedBack] = useState({
    Good: 0,
    Neutral: 0,
    Bad: 0
  });

  return (
    <FeedbackWidget feedback={feedback} setFeedBack={setFeedBack}/>
  );
};
