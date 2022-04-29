import React, { useContext } from "react";
import FeedbackContext from "../../context/FeedbackContext";

export default function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  // Calculate ratings
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1);

  console.log(average);

  return (
    <div className="feedback-stats">
      <h4> {feedback.length} Omdömen</h4>
      <h4>Genomsnittlig rating: {isNaN(average) ? 0 : average} </h4>
    </div>
  );
}
