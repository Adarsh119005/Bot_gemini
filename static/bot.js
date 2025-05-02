const faqData = {
    "send photo": "To send a photo on WhatsApp, open the chat and click the attachment icon. Then choose 'Gallery' or 'Camera'.",
    "google pay": "Google Pay is a digital payment service that allows you to send money, pay bills, and more using your phone.",
  };
  
  function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    const chatBox = document.getElementById("chat-box");
  
    // Show user's message
    const userMessage = document.createElement("div");
    userMessage.classList.add("chat-message", "user-message");
    userMessage.innerText = userInput;
    chatBox.appendChild(userMessage);
  
    // Show bot's reply
    const botMessage = document.createElement("div");
    botMessage.classList.add("chat-message", "bot-message");
    botMessage.innerText = getBotReply(userInput);
    chatBox.appendChild(botMessage);
  
    // Clear the input box
    document.getElementById("user-input").value = "";
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
  }
  
  function getBotReply(input) {
    input = input.toLowerCase().trim();
    if (faqData[input]) {
      return faqData[input];
    } else {
      return "Sorry, I didn't understand that. Can you please ask something else?";
    }
  }
  