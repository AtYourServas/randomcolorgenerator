//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://x-colors.herokuapp.com/api/random/'+choice
  const div = document.querySelector('div')
  const hex = document.getElementById('hex')
  const rgb = document.getElementById('rgb')
  const hsl = document.getElementById('hsl')

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        //Show Div with Background of the Random Color
        div.style.background = data.hex
        div.style.display = 'flex'
        //Display Various Color Codes
        hex.innerText = `HEX:    ${data.hex}`
        rgb.innerText = `RGB:    ${data.rgb}`
        hsl.innerText = `HSL:    ${data.hsl}`
        //Pull Hue, Saturation, and Lightness from Data
        const hslArray = data.hsl.split(', ')
        const hue = Number(hslArray[0].slice(4))
        const saturation = Number(hslArray[1].slice(0, -1))
        const lightness = Number(hslArray[2].slice(0,-2))
        //Change text to white based on color features
        if (hue > 200 || lightness < 40 || saturation < 40) {
          div.style.color = 'white'
        }
        else {
          div.style.color = 'black'
        }
        console.log(hue, saturation, lightness)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}