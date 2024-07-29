document.addEventListener('DOMContentLoaded', () => {
    // Carrusel
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-controls .prev');
    const nextButton = document.querySelector('.carousel-controls .next');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? 1 : 0;
        });
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            currentIndex = i;
            showSlide(currentIndex);
        });
    });


    
  
    function redirectToCheckout() {
        // Redirige a la página de datos de compra
        window.location.href = 'checkout.html';
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const checkoutForm = document.getElementById('checkoutForm');
    const checkoutMessage = document.getElementById('checkoutMessage');

    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Obtener los datos del formulario
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;
        const payment = document.getElementById('payment').value;

        // Aquí podrías enviar los datos a un servidor para procesar la compra
        // Por ahora, solo mostraremos un mensaje de confirmación

        checkoutMessage.textContent = 'Compra realizada con éxito. ¡Gracias por tu compra!';
        
        // Opcional: Redirige a una página de agradecimiento
        // window.location.href = 'thankyou.html';
    });
});

