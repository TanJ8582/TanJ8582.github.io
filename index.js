var modal = document.getElementById("loginModal");

// Get the button that opens the modal
var btn = document.getElementById("loginBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.inputBox input[type="text"], .inputBox input[type="email"]').forEach(input => {
      let label = input.nextElementSibling;
      label.innerHTML = label.innerText.split('').map((letter, i) =>
          `<span style="transition-delay:${i * 50}ms">${letter}</span>`
      ).join('');
  });
});