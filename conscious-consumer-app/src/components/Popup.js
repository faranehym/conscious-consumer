import React, { useState } from 'react';
import { ChakraProvider, Box, Button } from '@chakra-ui/react';

const Popup = () => {
  const [apiData, setApiData] = useState(null);

  const getDataFromAPI = async () => {
    try {
      const response = await fetch('https://beta4.api.climatiq.io/estimate'); // Replace with your API endpoint
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error('Error fetching data from API:', error);
      setApiData({ error: 'Error fetching data from API' });
    }
  };

  return (
    <ChakraProvider>
      <Box p={5}>
        <Button onClick={getDataFromAPI}>Get Data from API</Button>
        <div>
          {apiData && (
            <pre>{JSON.stringify(apiData, null, 2)}</pre>
          )}
        </div>
      </Box>
    </ChakraProvider>
  );
};

export default Popup;
