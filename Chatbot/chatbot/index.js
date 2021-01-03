let mic = document.getElementById("mic")
let chat_area = document.querySelector(".chat-area")
let chat_main = document.querySelector(".chat-main")
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()


function showUserMessage(message) {
    let output = ""
    output +=`<div class = "chatbox-user">${message}</div>`
    chat_main.innerHTML += output
    return chat_main
}
function showBotMessage(message){
    console.log(message + " bot message")
    let output = '';
    output += `<div class="chatbox-bot">${message}</div>`;
   chat_main.innerHTML += output;
    return chat_main;
}

function botVoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Sorry I don't know what that mean!"

    if(message.includes('hai')){
        let finalresult = "Hey how is it going buddy"
        speech.text = finalresult;
    }
    if(message.includes('fine')){
        let finalresult = "How can i help you"
        speech.text = finalresult;
    }
    if(message.includes('what do you do')){
        let finalresult = "I follow your instructions."
        speech.text = finalresult;
    }
    if(message.includes('who are you')){
        let finalresult = "I  am a  bot"
        speech.text = finalresult;
    }
    if(message.includes('how are you' || 'how are you doing today')){
        let finalresult = "great"
        speech.text = finalresult;
    }
  
    if(message.includes('tell me something' || 'talk')){
        let finalresult = "What can i tell you nothing here much"
        speech.text = finalresult;
    }
    if(message.includes('what is your name')){
        let finalresult = "I don't have any name"
        speech.text = finalresult;
    }
    if(message.includes('why')){
        let finalresult = "I don't know"
        speech.text = finalresult;
    }
  
    if(message.includes('talk something')){
        let finalresult = "sorry I'm an introvert you can ask anything"
        speech.text = finalresult;
    }
    if(message.includes('I love you' || "love" || "love you so much")){
        let finalresult = "Love you too."
        speech.text = finalresult;
    }
    if(message.includes('what are you doing')){
        let finalresult = "nothing buddy, just serving you that's it."
        speech.text = finalresult;
    }
    if(message.includes('feeling hungry')){
        let finalresult = "You can have Rizwana basha's Biriyani"
        speech.text = finalresult;
    }
    if(message.includes('your favorite recipe')){
        let finalresult = "jafar da ki roti"
        speech.text = finalresult;
    }
    if(message.includes('best recipe')){
        let finalresult = "jafar da ki roti"
        speech.text = finalresult;
    }
    if(message.includes('see you later')){
        let finalresult = "Love to talk again.. Thank you"
        speech.text = finalresult;
    }
    window.speechSynthesis.speak(speech)
    chat_area.appendChild(showBotMessage(speech.text))
    console.log(speech.text)
}

recognition.onresult = function(e){
    let resultIndex = e.resultIndex
    let transcript = e.results[resultIndex][0].transcript
    chat_area.appendChild(showUserMessage(transcript))
   
    
    botVoice(transcript)
    chat_area.scrollBy(0,50)
    console.log(chat_area)
    console.log(e);
    console.log(transcript )
} 

recognition.onend=function(){
    mic.style.color = "grey"
}
mic.addEventListener('click', function() {
    mic.style.color = "blue";
    recognition.start()
    scrollWin()
    console.log("Activated")

})
function scrollWin() {
    chat_area.scrollBy(0, 100)
}


