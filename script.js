const style = document.createElement('style');
style.textContent = `
    .smooth-jump {
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        cursor: pointer;
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', () => {
    const smoothElements = document.querySelectorAll('.smooth-jump');
    
    smoothElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.05)';
            this.style.boxShadow = '0 10px 20px rgba(255, 255, 255, 0.1)';
        });
        
        el.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 2px 5px rgba(255, 255, 255, 0.1)';
        });
    });
});

var swiper = new Swiper(".mySwiper", {

    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el:  ".swiper-hagination",
    },
    mousewhell: true,
    keyboard: true,

});