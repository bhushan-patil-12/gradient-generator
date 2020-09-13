let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let randomButton = document.getElementById("random-button");
let copyButton = document.getElementById("copy-button");
let body = document.getElementById("body");

function gradientGenerator() {
    body.style.background = "linear-gradient(to right, " + color1.value + " ," + color2.value + ")";
    output.textContent = body.style.background + ";";
}

function randomGradientGenerator() {
    color1.value = '#' + Math.floor(Math.random() * 16777215).toString(16);
    color2.value = '#' + Math.floor(Math.random() * 16777215).toString(16);
    gradientGenerator();
}

function copyToClipboard() {
    const str = document.getElementById('output').innerText;
    const invisibleArea = document.createElement('textarea');
    invisibleArea.value = str;
    // making textarea invisible
    invisibleArea.setAttribute('readonly', '');
    invisibleArea.style.position = 'absolute';
    invisibleArea.style.left = '-9999px';

    document.body.appendChild(invisibleArea);
    invisibleArea.select();
    document.execCommand('copy');
    document.body.removeChild(invisibleArea);
}

color1.addEventListener("input", gradientGenerator);
color2.addEventListener("input", gradientGenerator);
randomButton.addEventListener("click", randomGradientGenerator);
copyButton.addEventListener("click", copyToClipboard);