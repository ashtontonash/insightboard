import "./App.css";

import Insights from "./Components/Insights/Insights";
import NewInsight from "./Components/NewInsight/NewInsight";

import Header from "./Components/Header";

function App() {

  const insights = [
    {
      id: "e1",
      title: "Chatted with someone at school whom I had previously not gotten along with.",
      insight: "Nothing is ever set in stone, sometimes we don't realize how similar to a person we are and how often we judge.",
      date: new Date(2022, 7, 14),
    },
    { id: "e2", title: "Tried a new foreign food today and loved it.", insight: "Go out of your comfort zone more, you'll often find things you love.", date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Got a late fine on my library book.",
      insight: "It's important to record even the small things, because even those add up over time.",
      date: new Date(2022, 2, 28),
    },
    {
      id: "e4",
      title: "Got a call from my distant cousin today.",
      insight: "Random interactions like that are what make life unpredictable and profound.",
      date: new Date(2022, 5, 12),
    },
  ];

  const addInsightHandler = insight => {
    console.log(insight)
  }

  return (
    <div className="insightboard">
      <Header/>
      <div>
      <NewInsight onAddInsight={addInsightHandler} />
      <Insights items={insights} />
      </div>
    </div>
  )
};

export default App;


