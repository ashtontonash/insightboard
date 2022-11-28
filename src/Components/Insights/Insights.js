import InsightItem from "./InsightItem";
import Card from '../UI/Card';
import './Insights.css';

function Insights(props) {
  return (
    <Card className="insights">
      <InsightItem
        title={props.items[0].title}
        insight={props.items[0].insight}
        date={props.items[0].date}
      ></InsightItem>
      <InsightItem
        title={props.items[1].title}
        insight={props.items[1].insight}
        date={props.items[1].date}
      ></InsightItem>
      <InsightItem
        title={props.items[2].title}
        insight={props.items[2].insight}
        date={props.items[2].date}
      ></InsightItem>
      <InsightItem
        title={props.items[3].title}
        insight={props.items[3].insight}
        date={props.items[3].date}
      ></InsightItem>
    </Card>
  );
}

export default Insights;