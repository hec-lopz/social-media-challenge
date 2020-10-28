const $checkbox = document.getElementById('dark-mode-button'); const $body =
document.querySelector("body"); $checkbox.addEventListener('change', () => { if
($body.classList.contains("dark-mode")){ $body.classList.remove("dark-mode") }
else { $body.classList.add("dark-mode") } })
