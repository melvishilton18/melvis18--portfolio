document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    
    const scrollPercentage = Math.min(scrollPosition / maxScroll, 1) * 5; 

    
    let red, green, blue;

    
    if (scrollPosition === 0) {
        red = 255;
        green = 0;
        blue = 0;
    } else {
        
        red = Math.max(0, 255 - (scrollPercentage * 127)); 
        green = 0; 
        blue = Math.min(255, scrollPercentage * 128);
    }

    
    document.querySelector('.hero').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    const heroContent = document.querySelector('.hero-content');
    const heroSection = document.querySelector('.hero');

    const heroPositon = heroSection.getBoundingClientRect();

    if (heroPositon.top < window.innerHeight && heroPositon.bottom >= 0) {
        heroContent.classList.add ('show');
    } else {
        heroContent.classList.remove ('show');
    }
}, {passive: true});

