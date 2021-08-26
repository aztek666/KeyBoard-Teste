document.body.addEventListener('keyup', (event) =>{
    playSound(event.code.toLowerCase() );
});

function playSound(sound) {
    let audioElement = new Audio("click.mp3")
    let keyElement     = document.querySelector(`div[data-key="${sound}"]`);

    if ( audioElement ) {
        audioElement.currentTime = 0;
        audioElement.play();
    };

    if ( keyElement ) {
        keyElement.classList.add('active');

        setTimeout(()=> {
            keyElement.classList.remove('active');
        }, 100);
    };
};
