import React, { useState } from 'react';
import axios from 'axios';
import { ChakraProvider, Box, Button, Text } from '@chakra-ui/react';

const ApiRequestButton = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const [apiRequestDetails, setApiRequestDetails] = useState(null);

  const handleApiRequest = async () => {
    try {
      const API_KEY = '3D8YE4XMJG4N52G25D1W16FT3BY6'; // Replace with your actual API key

      const requestData = {
        emission_factor: {
          activity_id: 'consumer_goods-type_personal_accessories_childrens_accessories',
          data_version: '^0',
        },
        parameters: {
          money: 500,
          money_unit: 'usd',
        },
      };

      const response = await axios.post(
        'https://beta4.api.climatiq.io/estimate',
        requestData,
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );

      setApiResponse(response.data);

      // Save API request details in state
      setApiRequestDetails({
        method: 'POST',
        url: 'https://beta4.api.climatiq.io/estimate',
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
        data: requestData,
      });

      console.log('API Response:', response.data);
    } catch (error) {
      console.error('Error making API request:', error);
    }
  };

  return (
    <ChakraProvider>
      <Box p={5}>
        <Button onClick={handleApiRequest}>Make API Request</Button>
        {apiResponse && (
          <Box mt={4}>
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              API Response:
            </Text>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              {/* Access and use the API response data here */}
              <Text>Emission Factor: {apiResponse.co2e} per {apiResponse.co2e_unit}</Text>
            </Box>
          </Box>
        )}
      </Box>
    </ChakraProvider>
  );
};

export default ApiRequestButton;
