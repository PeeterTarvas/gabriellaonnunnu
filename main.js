import './src/style.css'
import { setupCounter } from './src/counter.js'

console.log("Main.js is running")

document.querySelector('#app').innerHTML = `
    <div class="card">
        <h1 class="title">Kena sõbrapäeva nunnu,
         armastan sind hästi hästi palju ja igatsen sind väga!
          Musi :*, Sinu beebsu
         </h1>
        <div class="image-grid">
            <div class="animation">
                <img src="/images/cat-01.gif" class="cat img-fluid">
            </div>
            <div class="animation">
                <img src="/images/gabriellaonnuunnu1.jpg" class="cat img-fluid">
            </div>
            <div class="animation">
                <img src="/images/gabriellaonnuunnu2.jpg" class="cat img-fluid">
            </div>
            <div class="animation">
                <img src="/images/gabriellaonnuunnu3.jpg" class="cat img-fluid">
            </div>
        </div>
    </div>
`

setupCounter(document.querySelector('#counter'))