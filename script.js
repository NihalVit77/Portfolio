const text = "Nihal Prasad";
const speed = 120;            

let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
