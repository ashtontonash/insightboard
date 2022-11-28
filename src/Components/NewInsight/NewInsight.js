import React from 'react';
import InsightForm from './InsightForm';
import './NewInsight.css';

const NewInsight = (props) => {
    const saveInsightDataHandler = (enteredInsightData) => {
        const insightData = {
            ...enteredInsightData,
            id: Math.random().toString()
        };
        props.onAddInsight(insightData);
    }
    
    return <div className="new-insight">
        <InsightForm onSaveInsightData={saveInsightDataHandler} />
    </div>
};

export default NewInsight;