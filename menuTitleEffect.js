const target = window.document.getElementById("title-game");

const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*4}s linear both "> ${letter} </span>`
const colorLetter = letter => `<span style="color: hsla(${Math.random()*360}, 80%, 80%, 5);"> ${letter} </span>`;
const flickerAndColorText = text =>
    text
    .split('')
    .join('')
    .split('-')
    .map(colorLetter)
    .map(flickerLetter)
    .join('')
    .split(',');


const neonGlory = target => target.innerHTML = flickerAndColorText(target.textContent);


neonGlory(target);
target.onclick = ({ target }) => neonGlory(target);