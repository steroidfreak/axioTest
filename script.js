const API_URL = 'https://wvf6q7huv9.execute-api.ap-southeast-1.amazonaws.com/';
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

async function sendMessageToChatGPT(message) {
  try {
    console.log('Sending message:', message);  // Log the message being sent
    const response = await axios.post(PROXY_URL + API_URL, 
      { input: message },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'  // Required by CORS Anywhere
        }
      }
    );
    
    console.log('Full API response:', response.data);
    return response.data.response;
  } catch (error) {
    console.error('Error details:', error.response ? error.response.data : error.message);
    throw error;
  }
}

// Test the function
sendMessageToChatGPT("explain about singapore")
  .then(response => console.log('ChatGPT response:', response))
  .catch(error => console.error('Caught error:', error));