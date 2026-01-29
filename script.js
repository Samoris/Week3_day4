// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Feature 1 & 1-bis: Footer click detection with counter
    let clickCounter = 0;
    const footer = document.querySelector('footer');
    
    footer.addEventListener('click', function() {
        clickCounter++;
        console.log(`click number ${clickCounter}`);
    });
    
    // Feature 2: Hamburger menu toggle
    const hamburgerBtn = document.querySelector('.navbar-toggler');
    const navbarHeader = document.getElementById('navbarHeader');
    
    hamburgerBtn.addEventListener('click', function() {
        navbarHeader.classList.toggle('collapse');
    });
    
    // Feature 3: First card Edit button - turn text red
    const firstCard = document.querySelectorAll('.card')[0];
    const firstEditBtn = firstCard.querySelector('.btn-outline-secondary');
    const firstCardText = firstCard.querySelector('.card-text');
    
    firstEditBtn.addEventListener('click', function() {
        firstCardText.style.color = 'red';
    });
    
    // Feature 4: Second card Edit button - toggle text green
    const secondCard = document.querySelectorAll('.card')[1];
    const secondEditBtn = secondCard.querySelector('.btn-outline-secondary');
    const secondCardText = secondCard.querySelector('.card-text');
    
    secondEditBtn.addEventListener('click', function() {
        if (secondCardText.style.color === 'green') {
            secondCardText.style.color = '';
        } else {
            secondCardText.style.color = 'green';
        }
    });
    
    // Feature 5: Double-click navbar to toggle Bootstrap
    const navbar = document.querySelector('.navbar');
    const bootstrapLink = document.querySelector('link[href*="bootstrap"]');
    let bootstrapEnabled = true;
    
    navbar.addEventListener('dblclick', function() {
        if (bootstrapEnabled) {
            bootstrapLink.disabled = true;
            bootstrapEnabled = false;
        } else {
            bootstrapLink.disabled = false;
            bootstrapEnabled = true;
        }
    });
    
    // Feature 6: Hover View button to shrink cards
    const allCards = document.querySelectorAll('.card');
    
    allCards.forEach(function(card) {
        const viewBtn = card.querySelector('.btn-success');
        const cardImg = card.querySelector('.card-img-top');
        const cardText = card.querySelector('.card-text');
        
        viewBtn.addEventListener('mouseenter', function() {
            cardText.style.display = 'none';
            cardImg.style.width = '20%';
        });
        
        viewBtn.addEventListener('mouseleave', function() {
            cardText.style.display = 'block';
            cardImg.style.width = '';
        });
    });
    
    // Feature 7: Move last card to first position (gray button)
    const grayBtn = document.querySelector('.btn-secondary');
    const cardContainer = document.querySelector('.row');
    
    grayBtn.addEventListener('click', function() {
        const allCardColumns = cardContainer.querySelectorAll('.col-md-4');
        const lastCard = allCardColumns[allCardColumns.length - 1];
        cardContainer.insertBefore(lastCard, allCardColumns[0]);
    });
    
    // Feature 8: Move first card to last position (blue button)
    const blueBtn = document.querySelector('.btn-primary');
    
    blueBtn.addEventListener('click', function(event) {
        // Prevent default link behavior
        event.preventDefault();
        
        const allCardColumns = cardContainer.querySelectorAll('.col-md-4');
        const firstCard = allCardColumns[0];
        const lastCard = allCardColumns[allCardColumns.length - 1];
        
        // Insert after the last element using insertBefore with nextSibling
        cardContainer.insertBefore(firstCard, lastCard.nextSibling);
    });
    
    // Feature 9: Keyboard shortcuts for page layout
    const logo = document.querySelector('.navbar-brand');
    const container = document.querySelector('.container');
    
    logo.addEventListener('keypress', function(event) {
        // Remove all layout classes first
        container.classList.remove('col-4', 'offset-md-4', 'offset-md-8');
        
        switch(event.key) {
            case 'a':
                container.classList.add('col-4');
                break;
            case 'y':
                container.classList.add('col-4', 'offset-md-4');
                break;
            case 'p':
                container.classList.add('col-4', 'offset-md-8');
                break;
            case 'b':
                // Return to normal - classes already removed
                break;
        }
    });
    
    // Make logo focusable for keyboard events
    logo.setAttribute('tabindex', '0');
    
    console.log('All interactive features have been loaded!');
});