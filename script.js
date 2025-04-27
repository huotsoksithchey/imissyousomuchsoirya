document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const responseDiv = document.getElementById('response');
    const container = document.querySelector('.container');
    
    // Message sequence for the no button
    const noButtonMessages = [
        "No",
        "Plss click yes bby",
        "Bby back to me plss", 
        "I miss you so much",
        "Pretty please? 💖",
        "You're my everything",
        "Just say yes!",
        "I'll love you forever"
    ];
    let currentMessageIndex = 0;
    
    // No button click handler
    noBtn.addEventListener('click', function() {
        // Change to next message
        currentMessageIndex = (currentMessageIndex + 1) % noButtonMessages.length;
        noBtn.textContent = noButtonMessages[currentMessageIndex];
        
        // Add a cute animation
        noBtn.classList.add('message-change');
        setTimeout(() => {
            noBtn.classList.remove('message-change');
        }, 300);
    });
    
    // Yes button click
    yesBtn.addEventListener('click', function() {
        responseDiv.classList.remove('hidden');
        container.querySelector('.message').classList.add('hidden');
        container.querySelector('.buttons').classList.add('hidden');
        
        // Create heart rain effect
        const heartRain = document.querySelector('.heart-rain');
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = '❤️';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
                heartRain.appendChild(heart);
                
                // Remove heart after animation
                setTimeout(() => heart.remove(), 5000);
            }, i * 100);
        }
    });
    
    // Make title pulse
    const title = document.querySelector('.title');
    setInterval(() => {
        title.style.transform = 'scale(1.05)';
        setTimeout(() => title.style.transform = 'scale(1)', 500);
    }, 2000);
});