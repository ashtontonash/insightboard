import React, { useState } from 'react';
import InsightDate from './InsightDate';
import Card from '../UI/Card';
import './InsightItem.css';

const InsightItem = () => {
  const [title, setTitle] = useState(props.title);  

  const clickHandler = () => {
    setTitle();
    console.log(title);
  };
  
  return (
        <Card className='insight-item'>
          <InsightDate date={props.date}></InsightDate>
          <div className='insight_item__description'>
            <h2>{title}</h2>
            <div className='insight-item__reflection'>{props.insight}</div>
          </div>
          <button onClick={clickHandler}>Change title</button>
        </Card>
      );
}

export default InsightItem;