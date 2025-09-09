// Main JavaScript for Obofour Raphael Website

// Video Modal Functionality
const modal = document.getElementById('video-modal');
const modalTitle = document.getElementById('modal-title');
const videoContainer = document.getElementById('video-container');
const closeModalBtn = document.querySelector('.close-modal');
let lastFocusedElement;

function openModal(videoId, title) {
    modalTitle.textContent = title;
    videoContainer.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
    lastFocusedElement = document.activeElement;
    closeModalBtn.focus();
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    videoContainer.innerHTML = '';
    document.body.style.overflow = 'auto';
    if (lastFocusedElement) lastFocusedElement.focus();
}

if (modal) {
    // Open modal on video card click
    document.querySelectorAll('.video-card').forEach(card => {
        card.addEventListener('click', () => {
            const videoId = card.dataset.videoId;
            const title = card.querySelector('h3').textContent;
            openModal(videoId, title);
        });
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });

    // Close modal
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    // Keyboard trap
    modal.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            const focusableElements = modal.querySelectorAll('button, iframe, [tabindex]:not([tabindex="-1"])');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

// Contact Form Validation
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');

if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    function validateName() {
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            return false;
        }
        nameError.textContent = '';
        return true;
    }

    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            return false;
        }
        emailError.textContent = '';
        return true;
    }

    function validateMessage() {
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required.';
            return false;
        }
        messageError.textContent = '';
        return true;
    }

    function validateForm() {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();
        return isNameValid && isEmailValid && isMessageValid;
    }

    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    messageInput.addEventListener('blur', validateMessage);

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm()) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            // Simulate form submission (no server)
            setTimeout(() => {
                alert('Message sent successfully!');
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            }, 2000);
        }
    });
}

// CD Spinning Animation Control
const yesuPlayer = document.getElementById('yesu-player');
const cdElement = document.querySelector('.cd');

if (yesuPlayer && cdElement) {
    yesuPlayer.addEventListener('play', () => {
        cdElement.style.animationPlayState = 'running';
    });

    yesuPlayer.addEventListener('pause', () => {
        cdElement.style.animationPlayState = 'paused';
    });

    // Initially pause the animation
    cdElement.style.animationPlayState = 'paused';
}

// Featured Media Player Functionality
const mediaPlayerBtn = document.getElementById('media-player-btn');
const customPlayer = document.getElementById('custom-player');
const featuredPlayer = document.getElementById('featured-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentTrack = document.getElementById('current-track');
const progressFill = document.getElementById('progress-fill');
const playIcon = document.querySelector('.play-icon');
const buttonText = document.querySelector('.button-text');

// Playlist configuration
const playlist = [
    { src: 'yesu.mp3', title: 'Yesu' },
    { src: 'obaa.mp3', title: 'Obaa' },
    { src: 'efienipa.mp3', title: 'Efie Nipa' },
    { src: 'wosowoho.wav', title: 'Woso Woho' }
];

let currentTrackIndex = 0;
let isPlaying = false;

// Initialize player
function initPlayer() {
    loadTrack(currentTrackIndex);
    updateTrackDisplay();
}

// Load track
function loadTrack(index) {
    featuredPlayer.src = playlist[index].src;
    currentTrackIndex = index;
    updateTrackDisplay();
}

// Update track display
function updateTrackDisplay() {
    currentTrack.textContent = playlist[currentTrackIndex].title;
}

// Toggle play/pause
function togglePlayPause() {
    if (isPlaying) {
        featuredPlayer.pause();
        playPauseBtn.textContent = '▶';
        playIcon.textContent = '▶';
        buttonText.textContent = 'Play Music';
    } else {
        featuredPlayer.play();
        playPauseBtn.textContent = '⏸';
        playIcon.textContent = '⏸';
        buttonText.textContent = 'Playing...';
    }
    isPlaying = !isPlaying;
}

// Next track
function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
    if (isPlaying) {
        featuredPlayer.play();
    }
}

// Previous track
function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrackIndex);
    if (isPlaying) {
        featuredPlayer.play();
    }
}

// Update progress bar
function updateProgress() {
    const progress = (featuredPlayer.currentTime / featuredPlayer.duration) * 100;
    progressFill.style.width = progress + '%';
}

// Show/hide custom player
function togglePlayer() {
    if (customPlayer.style.display === 'none') {
        customPlayer.style.display = 'block';
        mediaPlayerBtn.classList.add('active');
    } else {
        customPlayer.style.display = 'none';
        mediaPlayerBtn.classList.remove('active');
    }
}

// Event listeners
if (mediaPlayerBtn) {
    mediaPlayerBtn.addEventListener('click', togglePlayer);
}

if (playPauseBtn) {
    playPauseBtn.addEventListener('click', togglePlayPause);
}

if (nextBtn) {
    nextBtn.addEventListener('click', nextTrack);
}

if (prevBtn) {
    prevBtn.addEventListener('click', prevTrack);
}

if (featuredPlayer) {
    featuredPlayer.addEventListener('timeupdate', updateProgress);
    featuredPlayer.addEventListener('ended', nextTrack);
    featuredPlayer.addEventListener('loadedmetadata', () => {
        progressFill.style.width = '0%';
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initPlayer);

// Vinyl Album Links Function
function openVinylLinks() {
    // Open both vinyl album parts in new tabs
    window.open('https://elasticstage.com/obo4raphael/releases/adom-akyedee-part-one-album', '_blank', 'noopener,noreferrer');
    window.open('https://elasticstage.com/obo4raphael/releases/adom-akyedee-part-two-album', '_blank', 'noopener,noreferrer');
}

// General Keyboard Accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        if (e.target.matches('.cta-button, .nav-button')) {
            e.preventDefault();
            e.target.click();
        }
    }
});