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
            // don't put a listener twice
            return;
        }
        audio.addEventListener('play', listener);
        audio.classList.add('poa-listener');
    });
};

function main() {
    addListeners();
    document.addEventListener('ready', function (e) {
        addListeners();
    });
}

main();
