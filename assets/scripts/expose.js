// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO


  // setting the path to find party images 
  let party_image_location = "assets/images/"
  let sound_image_location = "assets/icons/volume-level-"
  let audio_location = "assets/audio/"

  let option_value



  // GET horn-select
  let selector = document.getElementById("horn-select")


  // alert (selector.value)
  selector.addEventListener("change", (event) => {

    // Locate which element is selected
    option_value = event.target.value

    // alert (option_value)
    // Update image src
    let image = document.querySelector("img")
    image.src = party_image_location + option_value + ".svg"

  })





  // GET slider 
  let slider = document.getElementById("volume")
  // alert (slider)

  // GET volume icon 
  let icon = document.getElementById("volume-controls").querySelector("img")

  // Change volume 
  slider.addEventListener("input", changeVolume)


  // function 
  function changeVolume(e) {

    const degree = slider.value

    // change sound volume based on volume 
    if (degree == 0) {
      icon.src = sound_image_location + "0.svg"
    }
    else if (degree < 33) {
      icon.src = sound_image_location + "1.svg"
    }
    else if (degree < 67) {
      icon.src = sound_image_location + "2.svg"
    }
    else if (degree >= 67) {
      icon.src = sound_image_location + "3.svg"
    }

  }




  // GET button
  let button = document.querySelector("button")
  // console.log (button)



  let sound = document.querySelector("audio");

  // Play sound based on horns
  button.onclick = function () {

    sound.src = audio_location + option_value + ".mp3";

    // fking change the sound
    sound.volume = document.getElementById("volume").value / 100

    let sound_copy = document.querySelector("audio").src;
    // alert (sound_copy);
    sound.play();

    

  }

}
