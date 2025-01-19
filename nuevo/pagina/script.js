document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll(".toggle-info-btn");
    
    toggleButtons.forEach((button) => {
      const infoList = button.nextElementSibling; // Obtiene la lista que sigue al botón
  
      button.addEventListener("click", () => {
        const isHidden = infoList.style.display === "none" || !infoList.style.display;
        infoList.style.display = isHidden ? "block" : "none";
        button.textContent = isHidden ? "Ocultar detalles" : "Mostrar detalles";
      });
    });
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".celu");
    const pantallasMenu = document.querySelector(".pantallas");
  
    menuIcon.addEventListener("click", () => {
      pantallasMenu.classList.toggle("open");
    });
  });