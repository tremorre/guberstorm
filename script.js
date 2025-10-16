// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    // Create lightbox overlay element
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
        <span class="lightbox-close">&times;</span>
        <div class="lightbox-content">
            <img id="lightbox-image" src="" alt="">
            <div class="lightbox-caption" id="lightbox-caption"></div>
        </div>
    `;
    document.body.appendChild(overlay);

    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.lightbox-close');

    // Find all elements with image-trigger class
    const triggers = document.querySelectorAll('.image-trigger');

    triggers.forEach(trigger => {
        // Show lightbox on hover
        trigger.addEventListener('mouseenter', function() {
            const imagePath = this.getAttribute('data-image');
            const caption = this.getAttribute('data-caption') || '';
            
            lightboxImage.src = imagePath;
            lightboxCaption.textContent = caption;
            overlay.classList.add('active');
        });
    });

    // Close lightbox when clicking the close button
    closeBtn.addEventListener('click', function() {
        overlay.classList.remove('active');
    });

    // Close lightbox when clicking outside the image
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.classList.remove('active');
        }
    });

    // Close lightbox when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            overlay.classList.remove('active');
        }
    });

    // Optional: Close lightbox when mouse leaves the trigger
    // Uncomment if you want the lightbox to close immediately when not hovering
    /*
    triggers.forEach(trigger => {
        trigger.addEventListener('mouseleave', function() {
            overlay.classList.remove('active');
        });
    });
    */
});
