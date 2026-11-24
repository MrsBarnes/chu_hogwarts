document.addEventListener("DOMContentLoaded", function () {
    //#home슬라이드이미지
    $(document).ready(function() {
    let current = 0;
    const slides = $('.slider img');
    const total = slides.length;

    slides.eq(current).addClass('active');

    setInterval(function() {
        slides.eq(current).removeClass('active');
        current = (current + 1) % total;
        slides.eq(current).addClass('active');
    }, 3000); // 3초마다 전환
});
});