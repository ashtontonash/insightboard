import React from "react";
import { useState } from "react";
import "./InsightForm.css";

const InsightForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredInsight, setEnteredInsight] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const insightChangeHandler = (event) => {
    setEnteredInsight(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const insightData = {
      title: enteredTitle,
      amount: enteredInsight,
      date: new Date(enteredDate),
    };

    props.onSaveInsightData(insightData);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredInsight("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-insight__controls">
        <div className="new-insight__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-insight__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredInsight}
            onChange={insightChangeHandler}
          />
        </div>
        <div className="new-insight__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-insight__actions"></div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default InsightForm;
