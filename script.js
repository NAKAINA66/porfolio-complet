function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("show");
}

function handleSubmit(event) {
  event.preventDefault();
  const nom = document.getElementById("nom").value;
  alert(`Merci ${nom}, votre message a été envoyé !`);
}