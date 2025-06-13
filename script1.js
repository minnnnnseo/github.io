function toggleAccordion(index) {
    const content = document.querySelectorAll('.accordion-content')[index];
    const icon = document.querySelectorAll('.accordion-icon')[index];
    
    if (content.classList.contains('active')) {
        content.classList.remove('active');
        icon.textContent = '+';
    } else {
        content.classList.add('active');  
        icon.textContent = '−';
    }
}