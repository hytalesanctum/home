document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.staggered-image-left img, .staggered-image-right img');
    
    images.forEach(img => {
        let mouseX = 0, mouseY = 0;
        let isOver = false;
        
        img.addEventListener('mouseenter', function() {
            isOver = true;
            updateTilt();
        });
        
        img.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        img.addEventListener('mouseleave', function() {
            isOver = false;
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });
        
        function updateTilt() {
            if (!isOver) return;
            
            const rect = img.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const rotateY = ((mouseX - centerX) / rect.width) * 15;
            const rotateX = -((mouseY - centerY) / rect.height) * 15;
            
            img.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            requestAnimationFrame(updateTilt);
        }
    });
});
