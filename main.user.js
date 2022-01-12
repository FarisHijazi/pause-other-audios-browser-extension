function listener(e) {
    var thisAudio = this;
    for (var audio of document.querySelectorAll('audio')) {
        if (audio !== thisAudio) {
            audio.pause();
        }
    }
};
function addListeners() {
    document.querySelectorAll('audio').forEach(audio => {
        if (audio.classList.contains('poa-listener')) {
            return;
        }
        audio.addEventListener('play', listener);
        audio.classList.add('poa-listener');
    });
};

function main() {
    console.log('main.user.js')
    addListeners();

    document.addEventListener('ready', function (e) {
        console.log('document ready');
        addListeners();

    });
}

main();
