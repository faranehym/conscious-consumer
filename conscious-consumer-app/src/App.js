import React, {useState} from "react"; 
import './App.css';
import PersonList from './components/PersonList.js'; 
import OpenPieChart from "./components/OpenPieChart.js";
import CircularButton from "./components/CircularButton.js";
import { ChakraProvider } from '@chakra-ui/react'
import { CircularProgress, CircularProgressLabel, Button, Text } from '@chakra-ui/react'
import ReactDOM from 'react-dom';
import Popup from "./components/Popup.js";
import ApiRequestButton from "./components/Request.js";

// ReactDOM.render(
//   <React.StrictMode>
//     <Popup />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const data = [
  {
    name: "search engines",
    url: ["https://www.google.com", "https://www.bing.com"]
  }
]


function App() {

  const [lists, setLists] = useState(data); 

  return (
    <ChakraProvider>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+Toto:wght@600&family=Old+Standard+TT:wght@700&family=Trocchi&family=Work+Sans&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0')
      </style>
      <div className="homepage-body">
        <div className="home-heading">
          <Text className="heading" as='b' text-align='center'>Conscious </Text>
          <span class="material-symbols-outlined">
            energy_savings_leaf
          </span>
          <Text className="heading" as='b' text-align='center'> Consumer</Text>
        </div>
        <div className="home-subheading">
          <Text fontSize='md' as='i' className="subheading" text-align='center'>making informed purchases</Text>
        </div>
      </div>
      <div>
          <OpenPieChart/>
      </div>
      <div>
        <ApiRequestButton/>
      </div>
    </ChakraProvider>
  );

  // return (
  //   <ChakraProvider>
  //   <div className="App">
  //   <body>
  //     <PersonList/> 
  //       <h3>conscious consumer</h3>
  //       <div className="lists">
  //         {lists && lists.map((item) => {
  //           return(
  //             <button className="button" onClick={() => (openTabs(item.url))}>{item.name}</button>
  //           )
  //         })}
  //       </div>
  //       <div >
  //         <Button colorScheme='blue'>Button</Button>
  //         <CircularProgress value={30} size='120px' />
  //         <CircularButton/>
  //       </div>
  //       <div>
  //         <OpenPieChart />
  //       </div>
  //     </body>
  //   </div>
  //   </ChakraProvider>
  // );
}

export default App;
