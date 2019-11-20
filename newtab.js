window.onload = function () {

    function draw(backgroundMap) {
        for (let i = 0; i < 16; i++) {
            for (let j = 0; j < 16; j++) {
                const id = 16 * i + j;
                const cell = document.querySelector(`#c${id}`);
                cell.style.background = backgroundMap[i][j] ? "#fff" : "#368df9";
            }
        }
    }

    chrome.runtime.onMessage.addListener((request) => {
        if (request.greeting === 'hello') {
            draw(request.backgroundMap);
        }
    })

}
