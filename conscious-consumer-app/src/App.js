import React, {useState} from "react"; 
import './App.css';
import PersonList from './components/PersonList.js'; 
import OpenPieChart from "./components/OpenPieChart.js";
import CircularButton from "./components/CircularButton.js";
import { ChakraProvider } from '@chakra-ui/react'
import { CircularProgress, CircularProgressLabel, Button } from '@chakra-ui/react'

const data = [
  {
    name: "search engines",
    url: ["https://www.google.com", "https://www.bing.com"]
  }
]


function App() {

  const [lists, setLists] = useState(data); 

  const openTabs = (url) => {
    for (const link of url) {
      window.open(link, "_blank"); 
    }
  }

  const chartData = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
      },
    ],
  };

  return (
    <ChakraProvider>
    <div className="App">
    <body>
      <PersonList/> 
        <h3>conscious consumer</h3>
        <div className="lists">
          {lists && lists.map((item) => {
            return(
              <button className="button" onClick={() => (openTabs(item.url))}>{item.name}</button>
            )
          })}
        </div>
        <div >
          <Button colorScheme='blue'>Button</Button>
          <CircularProgress value={30} size='120px' />
          <CircularButton/>
        </div>
        <div>
          <OpenPieChart />
        </div>
      </body>
    </div>
    </ChakraProvider>
  );
}

export default App;
