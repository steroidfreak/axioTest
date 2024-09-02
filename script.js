const API_URL = "https://a37a2vmm2b.execute-api.ap-southeast-1.amazonaws.com/prod";
// const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

async function sendMessageToChatGPT(message) {
  try {
    console.log('Sending message:', message);  // Log the message being sent
const response = await axios.post(API_URL, 
      { input: message },
      {
        headers: {
          'Content-Type': 'application/json',
          // 'X-Requested-With': 'XMLHttpRequest'  // Required by CORS Anywhere
        }
      }
    );
    
    // console.log('Full API response:', response.data);
    return response.data.response;
  } catch (error) {
    console.error('Error details:', error.response ? error.response.data : error.message);
    throw error;
  }
}

// Test the function
document.addEventListener("DOMContentLoaded", async function(){

let data;
let message ="";

const inputElement = document.querySelector("#input");
inputElement.addEventListener("keyup", async function(event){

  if(event.key === "Enter"){
    message = inputElement.value.trim();

    if(message){
      document.querySelector("#inputLast").innerHTML=message;
      // console.log("captured message:", message);
      try {
        console.log(message);
        data = await sendMessageToChatGPT(message);
        console.log('ChatGPT response:', data);
        // Use data here or return it if this is inside an async function
      } catch (error) {
        console.error('Caught error:', error);
      }  
      let output = document.querySelector("#output");
      output.textContent = data;


      inputElement.value="";
    }
  }
})




})

