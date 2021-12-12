let secret = document.querySelector('.secret');

document.querySelector('.clickme').addEventListener('click', function() {
    if (secret.classList.contains("hidden")) {
      secret.classList.remove("hidden");
    } else {
      secret.classList.add("hidden");
    }
  })