// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  let languages = []

  function loadLang() {

    // alert ("stop 1")

    // Check for loading 
    if (typeof speechSynthesis === 'undefined') {
      alert("No language loaded")
      return;
    }

    // alert ("stop 2")

    // GET all voices 
    languages = speechSynthesis.getVoices()


    // alert ("stop 3")
    // alert ("length is " + languages.length)
    // Load each lang one by one 
    for (let i = 0; i < languages.length; i++) {

      // alert ("stop 10")

      const option = document.createElement('option');
      option.textContent = `${languages[i].name} (${languages[i].lang})`;


      // alert ("stop 4")

      // Set language name
      option.setAttribute('data-lang', languages[i].lang);
      option.setAttribute('data-name', languages[i].name);



      // alert ("stop 5")

      // Upload to html 
      document.getElementById("voice-select").appendChild(option);
    }
  }

  // alert ("before loadLang")

  loadLang()
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadLang;
  }

  // alert ("hello1")


  // GET text
  let text = document.getElementById("text-to-speak")

  // alert (text)


  let button = document.querySelector ("button")

  // alert ("hello2")

  button.onclick = function () {

    // alert ("hello3")
  // text.onsubmit = (event) => {
    // event.preventDefault();

    

    const useThis = new SpeechSynthesisUtterance(text.value);
    const selectedOption = document.getElementById("voice-select").selectedOptions[0].getAttribute('data-name');

    // alert ("hello4")
    // alert (text.value)
    // alert ("length is "+languages.length)

    for (let j = 0; j < languages.length ; j++) {
      // alert ("hello10")  
      if (languages[j].name === selectedOption) {
        useThis.voice = languages[j];
      }
    }


    // alert ("hello5")
    //  speechSynthesis.speak (useThis)

    let smile = document.getElementById ("explore").querySelector ("img")

    // smile.src = "assets/images/smiling-open.png"

    speechSynthesis.speak (useThis)

    useThis.addEventListener("start", function() {
      smile.src = "assets/images/smiling-open.png"
    })

    useThis.addEventListener("end", function() {
      smile.src = "assets/images/smiling.png"
    })

    
  }

}