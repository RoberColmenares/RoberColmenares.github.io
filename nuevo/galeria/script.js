const collections = {
    gallery1: [
        { src: 'assets/Morrocoy.png', title: 'Imagen 1', description: 'Descripción de la imagen 1' },
        { src: 'assets/cerro.jpg', title: 'Imagen 2', description: 'Descripción de la imagen 2' },
        { src: 'assets/Hueque.jpg', title: 'Imagen 3', description: 'Descripción de la imagen 3' },
        { src: 'assets/Peninsula.jpg', title: 'Imagen 3', description: 'Descripción de la imagen 3' }
    ],
    gallery2: [
        { src: 'assets/mdanos.jpg', title: 'Imagen 4', description: 'Descripción de la imagen 4' },
        { src: 'assets/adicora 2.jpg', title: 'Imagen 5', description: 'Descripción de la imagen 5' },
        { src: 'assets/puebloS.jpg', title: 'Imagen 6', description: 'Descripción de la imagen 6' },
        { src: 'assets/cabo.jpg', title: 'Imagen 6', description: 'Descripción de la imagen 6' }
    ],
    gallery3: [
        { src: 'assets/villamarina.jpg', title: 'Imagen 4', description: 'Descripción de la imagen 7' },
        { src: 'assets/tiraya.jpg', title: 'Imagen 5', description: 'Descripción de la imagen 8' },
        { src: 'assets/cayosombrero1.jpg', title: 'Imagen 6', description: 'Descripción de la imagen 9' },
        { src: 'assets/matagorda.jpg', title: 'Imagen 6', description: 'Descripción de la imagen 10' },
        { src: 'assets/adicorap.jpeg', title: 'Imagen 6', description: 'Descripción de la imagen 10' },
        { src: 'assets/Bocadaro.jpg', title: 'Imagen 6', description: 'Descripción de la imagen 10' }
    ]
};











let currentIndex = 0; 
let currentCollection = [];
// Lista de imagnes 
const images = ['assets/1.jpeg', 'assets/2.jpeg', 'assets/3.jpg'];

// Expandir imagen en el Modal
function openCollection(collectionName, startIndex = 0) {
    currentCollection = collections[collectionName]; // Establece la colección activa
    currentIndex = startIndex; // Índice inicial
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    const currentItem = currentCollection[currentIndex]; // Imagen actual
    modal.style.display = 'flex'; // Mostrar el modal
    modalImage.src = currentItem.src; // Asignar la imagen
    modalTitle.textContent = currentItem.title; // Título de la imagen
    modalDescription.textContent = currentItem.description; // Descripción de la imagen
}

// Función para cerrar el modal
function closeModal() {
    
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none'; // Ocultar el modal

    
}

document.getElementById('image-modal').addEventListener('click', function (event) {
    // Verifica que no se haya hecho clic en los botones o en la imagen
    if (event.target.id === 'image-modal') {
        closeModal();
    }
});


function navigate(direction) {
    currentIndex = (currentIndex + direction + currentCollection.length) % currentCollection.length; // Índice cíclico
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    const currentItem = currentCollection[currentIndex]; // Imagen actual
    modalImage.src = currentItem.src; // Actualizar la imagen
    modalTitle.textContent = currentItem.title; // Actualizar el título
    modalDescription.textContent = currentItem.description; // Actualizar la descripción
}