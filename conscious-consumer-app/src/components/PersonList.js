import React from 'react';
import axios from 'axios';
import { ChakraProvider, Box, Button } from '@chakra-ui/react';

class PersonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responseData: null,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const apiUrl = 'https://beta4.api.climatiq.io/estimate';
      const apiKey = '3D8YE4XMJG4N52G25D1W16FT3BY6'; // Replace 'API_KEY' with your actual API key

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

      const response = await axios.post(apiUrl, requestData, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      });

      this.setState({ responseData: response.data, error: null });
    } catch (error) {
      this.setState({
        responseData: null,
        error: error.response ? error.response.data : error.message,
      });
    }
  };

  render() {
    const { responseData, error } = this.state;

    return (
      // <div>
      //   {responseData && (
      //     <div>
      //       <h2>Response Data:</h2>
      //       <pre>{JSON.stringify(responseData, null, 2)}</pre>
      //     </div>
      //   )}
      //   {error && (
      //     <div>
      //       <h2>Error:</h2>
      //       <pre>{JSON.stringify(error, null, 2)}</pre>
      //     </div>
      //   )}
      // </div>
    <Box p={5}>
      <Button onClick={responseData}>Get Data from API</Button>
      <div>
        {responseData && (
          <div>
            <pre>{JSON.stringify(responseData, null, 2)}</pre>
          </div>
        )}
        {error && (
          <div>
            <pre>{JSON.stringify(error, null, 2)}</pre>
          </div>
        )}
      </div>
    </Box>
    );
  }
}

export default PersonList;