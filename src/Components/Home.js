import {useState, useEffect, useContext} from 'react'
import NewInsight from './NewInsight/NewInsight'
import Insights from './Insights/Insights'

const Home = () => {

    const [insights, setInsight] = useState('')

    const addInsightHandler = insight => {
        console.log('In App.js');
        console.log(insight)
      }

    return (
        <div>
          <NewInsight onAddInsight={addInsightHandler} />
          <Insights items={insights} />
        </div>
      );
    
}

export default Home;