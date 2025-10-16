// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    // Find all elements with image-trigger class
    const triggers = document.querySelectorAll('.image-trigger');

    triggers.forEach(trigger => {
        // Create a tooltip element for this trigger
        const tooltip = document.createElement('div');
        tooltip.className = 'image-tooltip';
        
        const img = document.createElement('img');
        const caption = document.createElement('div');
        caption.className = 'tooltip-caption';
        
        tooltip.appendChild(img);
        tooltip.appendChild(caption);
        trigger.appendChild(tooltip);

        // Show tooltip on hover
        trigger.addEventListener('mouseenter', function() {
            const imagePath = this.getAttribute('data-image');
            const captionText = this.getAttribute('data-caption') || '';
            
            img.src = imagePath;
            caption.textContent = captionText;
            
            // Show the tooltip
            tooltip.classList.add('active');
        });

        // Hide tooltip when mouse leaves
        trigger.addEventListener('mouseleave', function() {
            tooltip.classList.remove('active');
        });
    });
});
